import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCw, RotateCcw } from 'lucide-react';

export function VideoPlayer({ 
  videoUrl = '', 
  title = 'Edukativni Video',
  description = 'Pogledajte ovaj video za više informacija'
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  // Play/Pause toggle
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Mute/Unmute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Rotate video
  const rotateClockwise = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const rotateCounterClockwise = () => {
    setRotation((prev) => (prev - 90 + 360) % 360);
  };

  // Update progress
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / duration) * 100);
    }
  };

  // Handle progress bar click
  const handleProgressClick = (e) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  // Load video metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Format time
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto var(--spacing-12)',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: 'var(--spacing-6)',
        border: '2px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 'var(--spacing-6)' }}>
        <h3 style={{ 
          fontSize: '1.75rem',
          fontWeight: 800,
          color: 'var(--color-gray-900)',
          marginBottom: 'var(--spacing-2)',
          background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-secondary-600))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '1.125rem',
          color: 'var(--color-gray-600)',
          fontWeight: 500
        }}>
          {description}
        </p>
      </div>

      {/* Video Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        background: 'linear-gradient(135deg, var(--color-gray-900) 0%, var(--color-gray-800) 100%)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        border: '3px solid rgba(255, 255, 255, 0.1)'
      }}>
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        ) : (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-4)',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(126, 34, 206, 0.1))',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}>
              <Play style={{ width: '40px', height: '40px', color: 'var(--color-primary-600)', marginLeft: '4px' }} />
            </div>
            <p style={{ 
              fontSize: '1.25rem',
              color: 'white',
              fontWeight: 700,
              textAlign: 'center',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              padding: '0 var(--spacing-6)'
            }}>
              Video će biti dostupan uskoro
            </p>
          </div>
        )}
      </div>

      {/* Controls */}
      {videoUrl && (
        <div style={{
          marginTop: 'var(--spacing-6)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-4)'
        }}>
          {/* Progress Bar */}
          <div 
            ref={progressBarRef}
            onClick={handleProgressClick}
            style={{
              width: '100%',
              height: '8px',
              background: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '999px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: `${progress}%`,
              background: 'linear-gradient(90deg, var(--color-primary-500), var(--color-secondary-500))',
              borderRadius: '999px',
              transition: 'width 0.1s linear',
              boxShadow: '0 0 10px rgba(37, 99, 235, 0.5)'
            }} />
          </div>

          {/* Control Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--spacing-4)',
            flexWrap: 'wrap'
          }}>
            {/* Left Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
              <button
                onClick={togglePlay}
                className="btn-icon-premium"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500))',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 16px rgba(37, 99, 235, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 99, 235, 0.4)';
                }}
              >
                {isPlaying ? (
                  <Pause style={{ width: '24px', height: '24px', color: 'white' }} />
                ) : (
                  <Play style={{ width: '24px', height: '24px', color: 'white', marginLeft: '2px' }} />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="btn-icon-secondary"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--color-gray-100)',
                  border: '2px solid var(--color-gray-200)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-gray-200)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-300)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-gray-100)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                }}
              >
                {isMuted ? (
                  <VolumeX style={{ width: '20px', height: '20px', color: 'var(--color-gray-600)' }} />
                ) : (
                  <Volume2 style={{ width: '20px', height: '20px', color: 'var(--color-gray-600)' }} />
                )}
              </button>

              <span style={{ 
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: 'var(--color-gray-700)',
                fontVariantNumeric: 'tabular-nums'
              }}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Right Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
              <button
                onClick={rotateCounterClockwise}
                className="btn-icon-secondary"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--color-gray-100)',
                  border: '2px solid var(--color-gray-200)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-gray-200)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-300)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-gray-100)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                }}
                title="Rotiraj levo"
              >
                <RotateCcw style={{ width: '20px', height: '20px', color: 'var(--color-gray-600)' }} />
              </button>

              <button
                onClick={rotateClockwise}
                className="btn-icon-secondary"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--color-gray-100)',
                  border: '2px solid var(--color-gray-200)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-gray-200)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-300)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-gray-100)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                }}
                title="Rotiraj desno"
              >
                <RotateCw style={{ width: '20px', height: '20px', color: 'var(--color-gray-600)' }} />
              </button>

              <button
                onClick={toggleFullscreen}
                className="btn-icon-secondary"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--color-gray-100)',
                  border: '2px solid var(--color-gray-200)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-gray-200)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-300)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-gray-100)';
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                }}
                title={isFullscreen ? 'Izađi iz punog ekrana' : 'Puni ekran'}
              >
                {isFullscreen ? (
                  <Minimize style={{ width: '20px', height: '20px', color: 'var(--color-gray-600)' }} />
                ) : (
                  <Maximize style={{ width: '20px', height: '20px', color: 'var(--color-gray-600)' }} />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
