import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { VideoPlayer } from '../components/VideoPlayer';
import { 
  FileText, 
  CreditCard, 
  UserCheck, 
  CheckCircle, 
  Download,
  ArrowRight,
  Printer,
  Share2,
  Clock,
  AlertCircle,
  TrendingUp,
  ChevronLeft,
  Lightbulb,
  ListChecks,
  Sparkles,
  Info,
  Check,
  ChevronUp
} from 'lucide-react';
import html2canvas from 'html2canvas';

export function StepsPage() {
  const navigate = useNavigate();
  const reminderRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);
  const stepRefs = useRef([]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to scroll to next step
  const scrollToNextStep = (currentIndex) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < steps.length && stepRefs.current[nextIndex]) {
      stepRefs.current[nextIndex].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  // Function to scroll to previous step
  const scrollToPreviousStep = (currentIndex) => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0 && stepRefs.current[prevIndex]) {
      stepRefs.current[prevIndex].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  const steps = [
    {
      number: 1,
      title: 'Pripremi potrebne dokumente',
      description: 'Sakupi svu potrebnu dokumentaciju prije odlaska u banku.',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'linear-gradient(135deg, var(--color-primary-100), var(--color-primary-200))',
      iconColor: 'var(--color-primary-600)',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      details: [
        'Lična karta ili pasoš',
        'Rješenje o naknadi (invalidnina, materijalno obezbjeđenje, itd.)',
        'Dokaz o adresi stanovanja (račun za struju ili vodu)',
        'JMBG (Jedinstveni matični broj građana)'
      ],
      tips: [
        'Napravi kopije svih dokumenata za svoju evidenciju',
        'Provjeri da su dokumenti važeći i nije im istekao rok'
      ]
    },
    {
      number: 2,
      title: 'Idi u banku i zatraži osnovni platni račun',
      description: 'Posjeti šalter banke i jasno reci šta ti treba.',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-500',
      iconBg: 'linear-gradient(135deg, var(--color-secondary-100), var(--color-secondary-200))',
      iconColor: 'var(--color-secondary-600)',
      glowColor: 'rgba(168, 85, 247, 0.3)',
      details: [
        'Pitaj za "osnovni platni račun" - to je najjeftinija opcija',
        'Objasni da primaš socijalnu naknadu ili invalidninu',
        'Pitaj o svim troškovima - nema skrivenih naknada',
        'Zatraži da ti objasne svaku stavku u ugovoru'
      ],
      tips: [
        'Ne potpisuj ništa ako ne razumiješ',
        'Možeš povesti nekoga sa sobom za podršku',
        'Zatraži pisani pregled svih troškova'
      ]
    },
    {
      number: 3,
      title: 'Potpiši ugovor i aktiviraj račun',
      description: 'Nakon što razumiješ sve uslove, potpiši ugovor.',
      icon: UserCheck,
      color: 'from-green-500 to-emerald-500',
      iconBg: 'linear-gradient(135deg, var(--color-accent-100), var(--color-accent-200))',
      iconColor: 'var(--color-accent-600)',
      glowColor: 'rgba(34, 197, 94, 0.3)',
      details: [
        'Pročitaj cijeli ugovor prije potpisivanja',
        'Zatraži kopiju ugovora za sebe',
        'Dobiješ broj računa (IBAN)',
        'Postavi PIN kod za karticu (ako dobijaš karticu)'
      ],
      tips: [
        'Zapamti ili zapiši svoj PIN negdje sigurno',
        'Nikada ne dijeli PIN ni sa kim - ni sa bankarom!',
        'Zadrži svu dokumentaciju na sigurnom mjestu'
      ]
    },
    {
      number: 4,
      title: 'Dostavi broj računa instituciji',
      description: 'Obavijesti instituciju koja ti isplaćuje naknadu o novom računu.',
      icon: CheckCircle,
      color: 'from-orange-500 to-amber-500',
      iconBg: 'linear-gradient(135deg, var(--color-warning-100), var(--color-warning-200))',
      iconColor: 'var(--color-warning-600)',
      glowColor: 'rgba(245, 158, 11, 0.3)',
      details: [
        'Idi u instituciju koja ti isplaćuje naknadu (Centar za socijalni rad, Fond PIO, itd.)',
        'Dostavi im broj svog računa (IBAN)',
        'Pitaj kada možeš očekivati prvu uplatu',
        'Zatraži potvrdu o prijemu dokumentacije'
      ],
      tips: [
        'Prvo plaćanje može potrajati, budi strpljiv',
        'Redovno provjeri stanje računa',
        'Čuvaj sve potvrde o obrađenim zahtjevima'
      ]
    }
  ];

  const exportReminder = async () => {
    if (!reminderRef.current) return;
    
    setIsExporting(true);
    try {
      const canvas = await html2canvas(reminderRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: false,
        foreignObjectRendering: false,
        imageTimeout: 0,
        onclone: (clonedDoc) => {
          // Find all elements in cloned document
          const allElements = clonedDoc.querySelectorAll('*');
          
          allElements.forEach(el => {
            // Remove all classes to prevent CSS oklch references
            if (el instanceof SVGElement) {
              el.setAttribute('class', '');
              el.setAttribute('fill', 'currentColor');
              el.setAttribute('stroke', 'none');
            } else {
              el.className = '';
            }
            
            // Force RGB colors on all elements
            el.style.color = '#000000';
            el.style.backgroundColor = 'transparent';
            el.style.borderColor = 'transparent';
            
            // Remove all CSS custom properties
            const computedStyle = window.getComputedStyle(el);
            for (let i = 0; i < computedStyle.length; i++) {
              const prop = computedStyle[i];
              if (prop.startsWith('--')) {
                el.style.removeProperty(prop);
              }
            }
          });
          
          // Apply hardcoded styles to specific elements
          const styleTag = clonedDoc.createElement('style');
          styleTag.textContent = `
            * {
              color: #000000 !important;
              background-color: transparent !important;
              border-color: #e5e7eb !important;
            }
            h2 { color: #2563eb !important; }
            p { color: #6b7280 !important; }
            li { color: #6b7280 !important; }
            svg { fill: currentColor !important; }
          `;
          clonedDoc.head.appendChild(styleTag);
        }
      });
      
      const link = document.createElement('a');
      link.download = 'finsim-koraci-podsjetnik.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error exporting:', error);
      alert('Greška pri exportu. Pokušaj ponovo.');
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    // First, export as image using the same method as exportReminder
    if (!reminderRef.current) return;
    
    try {
      const canvas = await html2canvas(reminderRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: false,
        foreignObjectRendering: false,
        imageTimeout: 0,
        onclone: (clonedDoc) => {
          // Find all elements in cloned document
          const allElements = clonedDoc.querySelectorAll('*');
          
          allElements.forEach(el => {
            // Remove all classes to prevent CSS oklch references
            if (el instanceof SVGElement) {
              el.setAttribute('class', '');
              el.setAttribute('fill', 'currentColor');
              el.setAttribute('stroke', 'none');
            } else {
              el.className = '';
            }
            
            // Force RGB colors on all elements
            el.style.color = '#000000';
            el.style.backgroundColor = 'transparent';
            el.style.borderColor = 'transparent';
            
            // Remove all CSS custom properties
            const computedStyle = window.getComputedStyle(el);
            for (let i = 0; i < computedStyle.length; i++) {
              const prop = computedStyle[i];
              if (prop.startsWith('--')) {
                el.style.removeProperty(prop);
              }
            }
          });
          
          // Apply hardcoded styles to specific elements
          const styleTag = clonedDoc.createElement('style');
          styleTag.textContent = `
            * {
              color: #000000 !important;
              background-color: transparent !important;
              border-color: #e5e7eb !important;
            }
            h2 { color: #2563eb !important; }
            p { color: #6b7280 !important; }
            li { color: #6b7280 !important; }
            svg { fill: currentColor !important; }
          `;
          clonedDoc.head.appendChild(styleTag);
        }
      });
      
      // Convert canvas to blob
      canvas.toBlob(async (blob) => {
        if (!blob) {
          alert('Greška pri kreiranju slike. Pokušaj ponovo.');
          return;
        }

        // Check if Web Share API is available
        if (navigator.share && navigator.canShare) {
          try {
            const file = new File([blob], 'finsim-koraci-podsjetnik.png', { type: 'image/png' });
            
            if (navigator.canShare({ files: [file] })) {
              await navigator.share({
                files: [file],
                title: 'FinSim - Koraci za otvaranje računa',
                text: 'Pogledaj korake za otvaranje osnovnog platnog računa'
              });
            } else {
              // Fallback: copy link to clipboard
              fallbackShare();
            }
          } catch (error) {
            if (error.name !== 'AbortError') {
              console.error('Error sharing:', error);
              fallbackShare();
            }
          }
        } else {
          // Fallback for browsers without Share API
          fallbackShare();
        }
      }, 'image/png');
    } catch (error) {
      console.error('Error creating image:', error);
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    // Copy current URL to clipboard
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link kopiran u clipboard! Možeš ga podijeliti sa drugima.');
    }).catch(() => {
      alert('Greška pri kopiranju linka. Pokušaj ponovo.');
    });
  };

  return (
    <Layout>
      {/* Decorative Background Blobs */}
      <div className="decorative-blob blob-accent animate-float" style={{ 
        width: '380px', 
        height: '380px', 
        top: '80px', 
        right: '-110px' 
      }} />
      <div className="decorative-blob blob-secondary animate-float" style={{ 
        width: '320px', 
        height: '320px', 
        bottom: '120px', 
        left: '-90px',
        animationDelay: '1.5s'
      }} />

      <div className="container container-narrow" style={{ minHeight: 'calc(100vh - 200px)' }}>
        {/* Header Section */}
        <div className="text-center animate-fade-in-down" style={{ marginBottom: 'var(--spacing-12)' }}>
          {/* Title */}
          <h1 className="animate-fade-in-up" style={{ 
            animationDelay: '0.1s',
            marginBottom: 'var(--spacing-6)'
          }}>
            Koraci za otvaranje računa u banci
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up" style={{ 
            fontSize: '1.25rem',
            color: 'var(--color-gray-600)',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.7,
            animationDelay: '0.2s'
          }}>
            Slijedi ove jednostavne korake da bezbjedno otvoriš osnovni platni račun i počneš primati svoju naknadu.
          </p>
        </div>

        {/* Video Player Section */}
        <VideoPlayer 
          title="Video vodič: Kako otvoriti račun?" 
          description="Pogledaj detaljan video koji objašnjava sve korake za otvaranje osnovnog platnog računa"
        />

        {/* Steps Timeline */}
        <div className="steps-timeline-wrapper">
          {/* Timeline Line - Desktop Only */}
          <div className="timeline-line" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div
                key={step.number}
                className="animate-fade-in-up step-container"
                style={{
                  animationDelay: `${0.2 + index * 0.15}s`
                }}
                ref={el => stepRefs.current[index] = el}
              >
                {/* Step Card */}
                <div
                  className="finsim-card glass-strong step-card"
                  style={{
                    borderWidth: '3px',
                    borderColor: step.iconColor,
                    background: `linear-gradient(135deg, white 0%, ${step.iconBg.includes('primary') ? 'rgba(59, 130, 246, 0.03)' : step.iconBg.includes('secondary') ? 'rgba(168, 85, 247, 0.03)' : step.iconBg.includes('accent') ? 'rgba(34, 197, 94, 0.03)' : 'rgba(245, 158, 11, 0.03)'} 100%)`,
                    boxShadow: `0 20px 60px ${step.glowColor}, 0 0 0 1px rgba(255, 255, 255, 0.5) inset`
                  }}
                >
                  {/* REMOVED: Mobile and Desktop Number Badges - Redundant */}

                  {/* Icon Badge - Top Right */}
                  <div 
                    className="step-icon-badge"
                    style={{
                      background: step.iconBg,
                      boxShadow: `0 12px 28px ${step.glowColor}`
                    }}
                  >
                    <Icon style={{ color: step.iconColor }} />
                  </div>

                  {/* Content */}
                  <div className="step-content">
                    {/* Step Number Label */}
                    <div 
                      className="step-label"
                      style={{
                        background: step.iconBg,
                        borderColor: step.iconColor
                      }}
                    >
                      <div style={{ background: step.iconColor }}>
                        <span>{step.number}</span>
                      </div>
                      <span style={{ color: step.iconColor }}>
                        Korak {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3>{step.title}</h3>

                    {/* Description */}
                    <p className="step-description">{step.description}</p>

                    {/* Details Section */}
                    <div className="step-section">
                      <div className="step-section-header">
                        <div style={{ background: step.iconBg }}>
                          <ListChecks style={{ color: step.iconColor }} />
                        </div>
                        <h4>Šta treba uraditi:</h4>
                      </div>

                      <ul className="step-list">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="detail-item">
                            <div style={{ background: step.iconBg }}>
                              <Check style={{ color: step.iconColor }} />
                            </div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tips Section */}
                    <div 
                      className="step-tips"
                      style={{
                        background: `linear-gradient(135deg, ${step.iconBg.includes('primary') ? 'rgba(59, 130, 246, 0.08)' : step.iconBg.includes('secondary') ? 'rgba(168, 85, 247, 0.08)' : step.iconBg.includes('accent') ? 'rgba(34, 197, 94, 0.08)' : 'rgba(245, 158, 11, 0.08)'}, white)`,
                        borderColor: `${step.iconColor}20`,
                        boxShadow: `0 4px 12px ${step.glowColor}`
                      }}
                    >
                      <div className="step-section-header">
                        <div 
                          style={{ 
                            background: step.iconColor,
                            boxShadow: `0 4px 12px ${step.glowColor}`
                          }}
                        >
                          <Lightbulb style={{ color: 'white', fill: 'white' }} />
                        </div>
                        <h4 style={{ color: step.iconColor }}>Korisni savjeti:</h4>
                      </div>

                      <ul className="step-tips-list">
                        {step.tips.map((tip, idx) => (
                          <li key={idx}>
                            <Sparkles style={{ color: step.iconColor }} />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Navigation Buttons - Previous and Next Step */}
                    <div className="step-navigation-wrapper">
                      {/* Previous Step Button */}
                      {index > 0 && (
                        <button
                          onClick={() => scrollToPreviousStep(index)}
                          className="prev-step-button"
                          style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <div style={{
                            background: `linear-gradient(135deg, ${steps[index - 1].iconColor}, ${step.iconColor})`
                          }}>
                            <ChevronUp />
                          </div>
                          <span>Prethodni korak</span>
                        </button>
                      )}

                      {/* Next Step Button */}
                      {!isLast && (
                        <button
                          onClick={() => scrollToNextStep(index)}
                          className="next-step-button"
                          style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <div style={{
                            background: `linear-gradient(135deg, ${step.iconColor}, ${steps[index + 1].iconColor})`
                          }}>
                            <ArrowRight />
                          </div>
                          <span>Sljedeći korak</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Reminder Card */}
        <div 
          ref={reminderRef}
          className="finsim-card glass-strong animate-fade-in-up" 
          style={{ 
            marginTop: 'var(--spacing-16)',
            animationDelay: '0.8s',
            borderWidth: '3px',
            borderColor: 'var(--color-secondary-400)'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            flexWrap: 'wrap'
          }}>
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'linear-gradient(135deg, var(--color-secondary-400), var(--color-primary-400))',
              borderRadius: 'var(--radius-2xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)',
              animation: 'pulse-glow 3s ease-in-out infinite'
            }}>
              <Clock style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
            </div>

            <div style={{ flex: '1 1 100%', minWidth: '280px' }}>
              <h2 style={{ 
                marginBottom: 'var(--spacing-4)',
                background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-secondary-600))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Brzi podsjetnik
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                color: 'var(--color-gray-600)',
                marginBottom: 'var(--spacing-6)',
                lineHeight: 1.7
              }}>
                Sačuvaj ili odštampaj ovaj podsjetnik da uvijek imaš važne informacije pri ruci.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                gap: 'var(--spacing-4)',
                marginBottom: 'var(--spacing-6)'
              }}>
                <div style={{
                  padding: 'var(--spacing-4)',
                  background: 'var(--color-primary-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '2px solid var(--color-primary-200)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    marginBottom: 'var(--spacing-2)',
                    flexWrap: 'wrap'
                  }}>
                    <AlertCircle style={{ 
                      width: '1.25rem', 
                      height: '1.25rem', 
                      color: 'var(--color-primary-600)',
                      flexShrink: 0
                    }} />
                    <strong style={{ 
                      color: 'var(--color-primary-900)',
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                    }}>Dokumenti:</strong>
                  </div>
                  <p style={{ 
                    fontSize: 'clamp(0.85rem, 2.2vw, 0.9rem)',
                    color: 'var(--color-primary-800)',
                    margin: 0,
                    lineHeight: 1.5
                  }}>
                    Lična karta, rješenje o naknadi, dokaz o adresi
                  </p>
                </div>

                <div style={{
                  padding: 'var(--spacing-4)',
                  background: 'var(--color-secondary-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '2px solid var(--color-secondary-200)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    marginBottom: 'var(--spacing-2)',
                    flexWrap: 'wrap'
                  }}>
                    <AlertCircle style={{ 
                      width: '1.25rem', 
                      height: '1.25rem', 
                      color: 'var(--color-secondary-600)',
                      flexShrink: 0
                    }} />
                    <strong style={{ 
                      color: 'var(--color-secondary-900)',
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                    }}>U banci traži:</strong>
                  </div>
                  <p style={{ 
                    fontSize: 'clamp(0.85rem, 2.2vw, 0.9rem)',
                    color: 'var(--color-secondary-800)',
                    margin: 0,
                    lineHeight: 1.5
                  }}>
                    "Osnovni platni račun" - najjeftinija opcija
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                gap: 'var(--spacing-4)'
              }}>
                <button
                  onClick={exportReminder}
                  disabled={isExporting}
                  className="btn btn-primary"
                >
                  {isExporting ? (
                    <>
                      <div className="animate-spin">
                        <Download className="icon" />
                      </div>
                      <span>Izvoz...</span>
                    </>
                  ) : (
                    <>
                      <Download className="icon" />
                      <span>Preuzmi sliku</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="btn btn-secondary no-print"
                >
                  <Printer className="icon" />
                  <span>Odštampaj</span>
                </button>

                <button
                  onClick={handleShare}
                  className="btn btn-outline no-print"
                >
                  <Share2 className="icon" />
                  <span>Podijeli</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="no-print" style={{
          display: 'flex',
          gap: 'var(--spacing-4)',
          marginTop: 'var(--spacing-16)',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => navigate('/')}
            className="btn btn-secondary"
            style={{ flex: '1 1 200px' }}
          >
            <ChevronLeft className="icon" />
            <span>Nazad na početnu</span>
          </button>

          <button
            onClick={() => navigate('/profil')}
            className="btn btn-primary"
            style={{ flex: '1 1 200px' }}
          >
            <span>Kreiraj svoj profil</span>
            <ArrowRight className="icon" />
          </button>
        </div>
      </div>

      <BackToTop />
    </Layout>
  );
}