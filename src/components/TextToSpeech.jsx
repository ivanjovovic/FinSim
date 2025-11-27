import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Gauge } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function TextToSpeech() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [position, setPosition] = useState({ bottom: 24, right: 24 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const { language } = useLanguage();
  const utteranceRef = useRef(null);
  const buttonRef = useRef(null);

  // Check if browser supports speech synthesis
  const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    // Load saved speed from localStorage
    const savedSpeed = localStorage.getItem('tts-speed');
    if (savedSpeed) {
      setSpeed(parseFloat(savedSpeed));
    }

    // Load saved position from localStorage
    const savedPosition = localStorage.getItem('tts-position');
    if (savedPosition) {
      try {
        setPosition(JSON.parse(savedPosition));
      } catch (e) {
        console.error('Error loading saved position:', e);
      }
    }

    // Cleanup on unmount
    return () => {
      if (speechSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [speechSupported]);

  // Stop speaking when language changes
  useEffect(() => {
    handleStop();
  }, [language]);

  // Drag handlers
  const handleMouseDown = (e) => {
    if (e.target.closest('.tts-panel')) return; // Don't drag when clicking on panel
    
    setIsDragging(true);
    const rect = buttonRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    if (e.target.closest('.tts-panel')) return;
    
    setIsDragging(true);
    const rect = buttonRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonSize = 56;

    // Calculate new position from top-left
    let newX = e.clientX - dragOffset.x;
    let newY = e.clientY - dragOffset.y;

    // Keep button within viewport bounds
    newX = Math.max(0, Math.min(newX, viewportWidth - buttonSize));
    newY = Math.max(0, Math.min(newY, viewportHeight - buttonSize));

    // Convert to bottom-right positioning
    const newBottom = viewportHeight - newY - buttonSize;
    const newRight = viewportWidth - newX - buttonSize;

    setPosition({ bottom: newBottom, right: newRight });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonSize = 56;

    let newX = touch.clientX - dragOffset.x;
    let newY = touch.clientY - dragOffset.y;

    newX = Math.max(0, Math.min(newX, viewportWidth - buttonSize));
    newY = Math.max(0, Math.min(newY, viewportHeight - buttonSize));

    const newBottom = viewportHeight - newY - buttonSize;
    const newRight = viewportWidth - newX - buttonSize;

    setPosition({ bottom: newBottom, right: newRight });
    e.preventDefault();
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      // Save position to localStorage
      localStorage.setItem('tts-position', JSON.stringify(position));
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      localStorage.setItem('tts-position', JSON.stringify(position));
    }
  };

  // Add/remove event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, dragOffset, position]);

  const getPageContent = () => {
    // Get main content, excluding navigation and footer
    const main = document.querySelector('main');
    if (main) {
      // Clone the main element to manipulate it
      const clone = main.cloneNode(true);
      
      // Remove buttons, inputs, and other interactive elements text
      const elementsToRemove = clone.querySelectorAll('button, input, textarea, select, nav, .no-speech');
      elementsToRemove.forEach(el => el.remove());
      
      // Get text content
      let text = clone.textContent || clone.innerText || '';
      
      // Clean up extra whitespace
      text = text.replace(/\s+/g, ' ').trim();
      
      // Limit text length to prevent errors (max ~32k characters, we'll use 10k to be safe)
      if (text.length > 10000) {
        text = text.substring(0, 10000) + '...';
      }
      
      return text;
    }
    return '';
  };

  const getAvailableVoice = (lang) => {
    const voices = window.speechSynthesis.getVoices();
    
    // Try to find exact match
    let voice = voices.find(v => v.lang.startsWith(lang));
    
    // If no exact match, try broader match
    if (!voice) {
      const langCode = lang.split('-')[0];
      voice = voices.find(v => v.lang.startsWith(langCode));
    }
    
    // If still no match, use default voice
    return voice || voices[0];
  };

  const handleSpeak = () => {
    if (!speechSupported) {
      const msg = language === 'me' 
        ? 'Vaš browser ne podržava text-to-speech funkcionalnost.' 
        : 'Your browser does not support text-to-speech.';
      alert(msg);
      return;
    }

    const text = getPageContent();
    
    if (!text) {
      const msg = language === 'me' 
        ? 'Nema sadržaja za čitanje.' 
        : 'No content to read.';
      alert(msg);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Wait a bit for voices to load
    const speak = () => {
      // Create new utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;

      // Set language based on current app language
      const targetLang = language === 'me' ? 'sr-RS' : 'en-US';
      utterance.lang = targetLang;
      
      // Try to get a suitable voice
      const voice = getAvailableVoice(targetLang);
      if (voice) {
        utterance.voice = voice;
      }
      
      utterance.rate = speed;
      utterance.pitch = 1;
      utterance.volume = 1;

      // Event handlers
      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        
        // If the error is "not-allowed", it means user didn't interact first (shouldn't happen with button click)
        // If "canceled", user stopped it
        // Other errors: try with default voice
        if (event.error !== 'canceled' && event.error !== 'interrupted') {
          const msg = language === 'me' 
            ? 'Greška pri čitanju. Molimo pokušajte ponovo ili pokušajte drugi browser.' 
            : 'Error reading text. Please try again or use a different browser.';
          alert(msg);
        }
        
        setIsSpeaking(false);
        setIsPaused(false);
      };

      // Start speaking
      try {
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        console.error('Failed to speak:', error);
        setIsSpeaking(false);
        setIsPaused(false);
      }
    };

    // Ensure voices are loaded
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', speak, { once: true });
      // Fallback timeout
      setTimeout(speak, 100);
    } else {
      speak();
    }
  };

  const handlePause = () => {
    if (!speechSupported || !isSpeaking) return;
    
    try {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    } catch (error) {
      console.error('Pause/Resume error:', error);
      // If pause/resume fails, just stop
      handleStop();
    }
  };

  const handleStop = () => {
    if (!speechSupported) return;
    
    try {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    } catch (error) {
      console.error('Stop error:', error);
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    localStorage.setItem('tts-speed', newSpeed.toString());
    
    // If currently speaking, restart with new speed
    if (isSpeaking && !isPaused) {
      handleStop();
      // Give it a bit more time to fully stop
      setTimeout(() => handleSpeak(), 200);
    }
  };

  if (!speechSupported) {
    return null;
  }

  const handleButtonClick = (e) => {
    // Only toggle panel if not dragging
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        aria-label={language === 'me' ? 'Čitač teksta' : 'Text Reader'}
        title={language === 'me' ? 'Držite i vucite za pomjeranje' : 'Hold and drag to move'}
        style={{
          position: 'fixed',
          bottom: isOpen ? `${position.bottom + 156}px` : `${position.bottom}px`,
          right: `${position.right}px`,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: isDragging 
            ? 'linear-gradient(135deg, #1e40af 0%, #6b21a8 100%)'
            : 'linear-gradient(135deg, #2563eb 0%, #7e22ce 100%)',
          border: 'none',
          boxShadow: isDragging
            ? '0 16px 40px rgba(37, 99, 235, 0.6), 0 8px 20px rgba(126, 34, 206, 0.5)'
            : '0 8px 24px rgba(37, 99, 235, 0.4), 0 4px 12px rgba(126, 34, 206, 0.3)',
          cursor: isDragging ? 'grabbing' : 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: isDragging ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          color: 'white',
          userSelect: 'none',
          touchAction: 'none'
        }}
        onMouseEnter={(e) => {
          if (!isDragging) {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 99, 235, 0.5), 0 6px 16px rgba(126, 34, 206, 0.4)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isDragging) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.4), 0 4px 12px rgba(126, 34, 206, 0.3)';
          }
        }}
      >
        <div style={{
          position: 'relative',
          width: '24px',
          height: '24px'
        }}>
          {isSpeaking ? (
            <Volume2 style={{ width: '24px', height: '24px', strokeWidth: 2.5 }} />
          ) : (
            <VolumeX style={{ width: '24px', height: '24px', strokeWidth: 2.5 }} />
          )}
          
          {/* Drag indicator dots */}
          {!isDragging && (
            <div style={{
              position: 'absolute',
              bottom: '-18px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '3px',
              opacity: 0.6
            }}>
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'white' }} />
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'white' }} />
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'white' }} />
            </div>
          )}
        </div>
      </button>

      {/* Control Panel */}
      {isOpen && (
        <div
          className="tts-panel"
          style={{
            position: 'fixed',
            bottom: `${position.bottom}px`,
            right: `${position.right}px`,
            width: '320px',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
            padding: '24px',
            zIndex: 999,
            border: '2px solid rgba(37, 99, 235, 0.2)'
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: 'var(--color-gray-900)',
              margin: 0,
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Volume2 style={{ width: '20px', height: '20px', color: 'var(--color-primary-600)' }} />
              {language === 'me' ? 'Čitač teksta' : 'Text Reader'}
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-gray-600)',
              margin: 0,
              marginBottom: '8px'
            }}>
              {language === 'me' 
                ? 'Slušaj sadržaj stranice' 
                : 'Listen to page content'}
            </p>
            <p style={{
              fontSize: '0.75rem',
              color: 'var(--color-primary-600)',
              margin: 0,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ fontSize: '1rem' }}>⚡</span>
              {language === 'me' 
                ? 'Držite dugme za pomjeranje' 
                : 'Hold button to move it'}
            </p>
          </div>

          {/* Controls */}
          <div style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '20px'
          }}>
            {/* Play/Pause Button */}
            <button
              onClick={isSpeaking ? handlePause : handleSpeak}
              style={{
                flex: 1,
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                background: isSpeaking 
                  ? 'linear-gradient(135deg, var(--color-warning-500), var(--color-warning-600))'
                  : 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))',
                color: 'white',
                fontSize: '0.9375rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
              }}
            >
              {isSpeaking ? (
                <>
                  {isPaused ? <Play size={18} /> : <Pause size={18} />}
                  {isPaused 
                    ? (language === 'me' ? 'Nastavi' : 'Resume')
                    : (language === 'me' ? 'Pauziraj' : 'Pause')}
                </>
              ) : (
                <>
                  <Play size={18} />
                  {language === 'me' ? 'Čitaj' : 'Read'}
                </>
              )}
            </button>

            {/* Stop Button */}
            <button
              onClick={handleStop}
              disabled={!isSpeaking}
              style={{
                padding: '14px',
                borderRadius: '12px',
                border: '2px solid var(--color-gray-200)',
                background: 'white',
                color: isSpeaking ? 'var(--color-danger-600)' : 'var(--color-gray-400)',
                cursor: isSpeaking ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                opacity: isSpeaking ? 1 : 0.5
              }}
              onMouseEnter={(e) => {
                if (isSpeaking) {
                  e.currentTarget.style.borderColor = 'var(--color-danger-300)';
                  e.currentTarget.style.background = 'var(--color-danger-50)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                e.currentTarget.style.background = 'white';
              }}
            >
              <RotateCcw size={18} />
            </button>
          </div>

          {/* Speed Control */}
          <div style={{
            padding: '16px',
            background: 'var(--color-gray-50)',
            borderRadius: '12px',
            border: '1px solid var(--color-gray-200)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-gray-700)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Gauge size={16} />
                {language === 'me' ? 'Brzina' : 'Speed'}
              </label>
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--color-primary-600)',
                background: 'white',
                padding: '4px 12px',
                borderRadius: '8px',
                border: '1px solid var(--color-primary-200)'
              }}>
                {speed}x
              </span>
            </div>
            
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.25"
              value={speed}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                outline: 'none',
                appearance: 'none',
                background: `linear-gradient(to right, var(--color-primary-500) 0%, var(--color-primary-500) ${((speed - 0.5) / 1.5) * 100}%, var(--color-gray-300) ${((speed - 0.5) / 1.5) * 100}%, var(--color-gray-300) 100%)`,
                cursor: 'pointer'
              }}
            />
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '8px'
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)', fontWeight: 500 }}>
                {language === 'me' ? 'Sporije' : 'Slower'}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)', fontWeight: 500 }}>
                {language === 'me' ? 'Brže' : 'Faster'}
              </span>
            </div>
          </div>

          {/* Info */}
          <div style={{
            marginTop: '16px',
            padding: '12px',
            background: 'rgba(37, 99, 235, 0.05)',
            borderRadius: '10px',
            border: '1px solid rgba(37, 99, 235, 0.15)'
          }}>
            <p style={{
              fontSize: '0.8125rem',
              color: 'var(--color-gray-600)',
              margin: 0,
              lineHeight: 1.5
            }}>
              💡 {language === 'me' 
                ? 'Ovaj alat čita sadržaj stranice naglas. Kvalitet glasa zavisi od vašeg browsera i operativnog sistema.'
                : 'This tool reads page content aloud. Voice quality depends on your browser and operating system.'}
            </p>
          </div>

          {/* Browser compatibility note */}
          {isSpeaking && (
            <div style={{
              marginTop: '12px',
              padding: '10px',
              background: 'rgba(34, 197, 94, 0.05)',
              borderRadius: '10px',
              border: '1px solid rgba(34, 197, 94, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--color-accent-500)',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
              <span style={{
                fontSize: '0.8125rem',
                color: 'var(--color-accent-700)',
                fontWeight: 600
              }}>
                {language === 'me' ? 'Čitanje u toku...' : 'Reading in progress...'}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Custom CSS for range input thumb and animations */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600));
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
          transition: all 0.2s;
        }
        
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 3px 12px rgba(37, 99, 235, 0.5);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600));
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
          transition: all 0.2s;
        }
        
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 3px 12px rgba(37, 99, 235, 0.5);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @media (max-width: 640px) {
          /* Mobile adjustments */
        }
      `}</style>
    </>
  );
}
