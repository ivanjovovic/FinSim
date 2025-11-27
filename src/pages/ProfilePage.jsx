import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { VideoPlayer } from '../components/VideoPlayer';
import { 
  Wallet, 
  Heart, 
  Baby, 
  HandHeart, 
  Briefcase, 
  ArrowRight,
  Check,
  Info,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const PROFILES = [
  {
    id: 'minimalna_zarada',
    label: 'Korisnik minimalne zarade',
    icon: Briefcase,
    defaultIncome: 600,
    description: 'Primanje minimalne zarade – važno je da novac potraje do kraja mjeseca uz plaćanje osnovnih troškova.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconBg: 'linear-gradient(135deg, var(--color-primary-100), var(--color-primary-200))',
    iconColor: 'var(--color-primary-600)',
    glowColor: 'rgba(59, 130, 246, 0.3)'
  },
  {
    id: 'materijalno_obezbjedjenje',
    label: 'Korisnik materijalnog obezbjeđenja',
    icon: Wallet,
    defaultIncome: 320,
    description: 'Materijalno obezbjeđenje kao glavni izvor prihoda – fokus na osnovne životne troškove i račune.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconBg: 'linear-gradient(135deg, var(--color-accent-100), var(--color-accent-200))',
    iconColor: 'var(--color-accent-600)',
    glowColor: 'rgba(34, 197, 94, 0.3)'
  },
  {
    id: 'licna_invalidnina',
    label: 'Korisnik lične invalidnine',
    icon: Heart,
    defaultIncome: 320,
    description: 'Lična invalidnina, uz moguće dodatne troškove liječenja i pomoći u svakodnevnom životu.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    iconBg: 'linear-gradient(135deg, var(--color-danger-100), var(--color-danger-200))',
    iconColor: 'var(--color-danger-600)',
    glowColor: 'rgba(239, 68, 68, 0.3)'
  },
  {
    id: 'njega_i_pomoc',
    label: 'Korisnik dodatka za njegu i pomoć',
    icon: HandHeart,
    defaultIncome: 320,
    description: 'Dodatak za njegu i pomoć – dio sredstava ide na brigu, njegu i podršku u svakodnevnim aktivnostima.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    iconBg: 'linear-gradient(135deg, var(--color-secondary-100), var(--color-secondary-200))',
    iconColor: 'var(--color-secondary-600)',
    glowColor: 'rgba(168, 85, 247, 0.3)'
  },
  {
    id: 'naknada_nezaposleni',
    label: 'Korisnik naknade za nezaposlene',
    icon: Briefcase,
    defaultIncome: 320,
    description: 'Naknada za nezaposlene – potrebno je pažljivo rasporediti novac na račune, hranu i traženje posla.',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    iconBg: 'linear-gradient(135deg, var(--color-warning-100), var(--color-warning-200))',
    iconColor: 'var(--color-warning-600)',
    glowColor: 'rgba(245, 158, 11, 0.3)'
  },
];

export function ProfilePage() {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [customIncome, setCustomIncome] = useState('');
  const continueRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId);
    const profile = PROFILES.find(p => p.id === profileId);
    if (profile) {
      setCustomIncome(profile.defaultIncome.toString());
      
      // Auto-scroll to "nastavi dalje" section after profile selection
      setTimeout(() => {
        if (continueRef.current) {
          continueRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 300);
    }
  };

  const handleContinue = () => {
    if (selectedProfile && customIncome) {
      localStorage.setItem('selectedProfile', selectedProfile);
      localStorage.setItem('monthlyIncome', customIncome);
      window.scrollTo(0, 0);
      navigate('/prava');
    }
  };

  const selectedProfileData = PROFILES.find(p => p.id === selectedProfile);

  return (
    <Layout>
      {/* Decorative Background Blobs */}
      <div className="decorative-blob blob-primary animate-float" style={{ 
        width: '350px', 
        height: '350px', 
        top: '50px', 
        right: '-100px' 
      }} />
      <div className="decorative-blob blob-accent animate-float" style={{ 
        width: '300px', 
        height: '300px', 
        bottom: '100px', 
        left: '-80px',
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
            Izaberi svoj profil
          </h1>
        </div>

        {/* MOVED: Zašto biramo profil - NOW AT TOP */}
        <div 
          className="banner banner-info glass-strong animate-fade-in-up"
          style={{ 
            animationDelay: '0.3s',
            marginBottom: 'var(--spacing-12)'
          }}
        >
          <div style={{
            width: '3.5rem',
            height: '3.5rem',
            background: 'linear-gradient(135deg, var(--color-primary-100), var(--color-primary-200))',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Info className="icon-lg" style={{ color: 'var(--color-primary-600)' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ 
              marginBottom: 'var(--spacing-3)',
              color: 'var(--color-primary-900)',
              fontSize: '1.375rem'
            }}>
              Zašto biramo profil?
            </h3>
            <p style={{ 
              fontSize: '1.125rem',
              color: 'var(--color-primary-800)',
              lineHeight: 1.7,
              margin: 0
            }}>
              Različiti tipovi naknada imaju različita pravila i troškove. 
              Izborom profila ćemo ti pokazati savjete i simulacije prilagođene tvojoj situaciji.
            </p>
          </div>
        </div>

        {/* Video Player Section */}
        <VideoPlayer 
          title="Kako odabrati svoj profil" 
          description="Pogledajte video da razumijete koji profil vam najbolje odgovara i kako odabrati pravi iznos"
        />

        {/* Profile Cards Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--spacing-6)',
          marginBottom: 'var(--spacing-12)'
        }}>
          {PROFILES.map((profile, index) => {
            const Icon = profile.icon;
            const isSelected = selectedProfile === profile.id;
            
            return (
              <div
                key={profile.id}
                className="finsim-card animate-fade-in-up"
                style={{
                  cursor: 'pointer',
                  animationDelay: `${0.3 + index * 0.1}s`,
                  background: isSelected ? profile.bgColor : 'white',
                  borderColor: isSelected ? profile.iconColor : 'var(--color-gray-200)',
                  borderWidth: '2px',
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all var(--transition-slow)',
                  boxShadow: isSelected 
                    ? `var(--shadow-xl), 0 0 30px ${profile.glowColor}` 
                    : 'var(--shadow-md)'
                }}
                onClick={() => handleProfileSelect(profile.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProfileSelect(profile.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`${profile.label}: ${profile.description}`}
                aria-pressed={isSelected}
                data-profile-id={profile.id}
              >
                {/* Selected Indicator */}
                {isSelected && (
                  <div style={{
                    position: 'absolute',
                    top: 'var(--spacing-6)',
                    right: 'var(--spacing-6)',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: profile.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'scaleIn 0.3s ease-out',
                    boxShadow: `0 4px 12px ${profile.glowColor}`
                  }}>
                    <Check className="icon" style={{ color: profile.iconColor, width: '1.75rem', height: '1.75rem' }} />
                  </div>
                )}

                {/* Icon Container */}
                <div style={{
                  width: '4.5rem',
                  height: '4.5rem',
                  background: profile.iconBg,
                  borderRadius: 'var(--radius-xl)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-6)',
                  transition: 'transform var(--transition-slow)',
                  transform: isSelected ? 'scale(1.1)' : 'scale(1)'
                }}>
                  <Icon className="icon-xl" style={{ color: profile.iconColor }} />
                </div>

                {/* Title */}
                <h3 style={{ 
                  marginBottom: 'var(--spacing-3)',
                  fontSize: '1.375rem',
                  color: 'var(--color-gray-900)'
                }}>
                  {profile.label}
                </h3>

                {/* Income Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  background: isSelected ? 'rgba(255, 255, 255, 0.8)' : 'var(--color-gray-100)',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: 'var(--spacing-4)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: profile.iconColor
                }}>
                  <Wallet className="icon" style={{ width: '1rem', height: '1rem' }} />
                  <span>Preporučeni: {profile.defaultIncome} €</span>
                </div>

                {/* Description */}
                <p style={{ 
                  fontSize: '1rem',
                  color: 'var(--color-gray-600)',
                  lineHeight: 1.7,
                  marginBottom: '0'
                }}>
                  {profile.description}
                </p>

                {/* Hover Indicator */}
                {!isSelected && (
                  <div className="flex items-center justify-center gap-2" style={{
                    marginTop: 'var(--spacing-6)',
                    color: 'var(--color-gray-500)',
                    fontSize: '1rem',
                    fontWeight: 500
                  }}>
                    <span>Klikni za odabir</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Income Section */}
        {selectedProfile && selectedProfileData && (
          <div 
            ref={continueRef}
            className="finsim-card glass-strong animate-scale-in"
            style={{ 
              marginBottom: 'var(--spacing-12)',
              borderColor: selectedProfileData.iconColor,
              borderWidth: '2px',
              boxShadow: `var(--shadow-xl), 0 0 30px ${selectedProfileData.glowColor}`
            }}
          >
            {/* Header with Icon */}
            <div className="flex items-center gap-4" style={{ marginBottom: 'var(--spacing-8)' }}>
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                background: selectedProfileData.iconBg,
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles className="icon-lg" style={{ color: selectedProfileData.iconColor }} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ marginBottom: 'var(--spacing-2)', fontSize: '1.75rem' }}>
                  Unesi mjesečni iznos naknade
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', margin: 0 }}>
                  Možeš prilagoditi iznos prema svojoj stvarnoj situaciji. Ovo je samo za simulaciju.
                </p>
              </div>
            </div>

            {/* Input Field */}
            <div style={{ marginBottom: 'var(--spacing-8)' }}>
              <label 
                htmlFor="income"
                style={{
                  display: 'block',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--color-gray-900)',
                  marginBottom: 'var(--spacing-4)'
                }}
              >
                Mjesečni prihod (€)
              </label>
              
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: 'var(--spacing-6)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: selectedProfileData.iconColor,
                  zIndex: 1
                }}>
                  €
                </span>
                <input
                  id="income"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={customIncome}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only digits or empty string
                    if (value === '' || /^\d+$/.test(value)) {
                      setCustomIncome(value);
                    }
                  }}
                  placeholder="320"
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-6) var(--spacing-6) var(--spacing-6) 3.5rem',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--color-gray-900)',
                    background: 'white',
                    border: `3px solid ${selectedProfileData.iconColor}`,
                    borderRadius: 'var(--radius-xl)',
                    outline: 'none',
                    transition: 'all var(--transition-base)',
                    boxShadow: `0 0 0 4px ${selectedProfileData.glowColor}`
                  }}
                />
              </div>

              <p style={{ 
                fontSize: '1rem',
                color: 'var(--color-gray-500)',
                marginTop: 'var(--spacing-3)',
                marginBottom: 0
              }}>
                Preporučeni iznos za {selectedProfileData.label.toLowerCase()}: <strong>{selectedProfileData.defaultIncome} €</strong>
              </p>
            </div>

            {/* Success Message */}
            <div 
              className="banner banner-success glass animate-scale-in"
              style={{ 
                marginBottom: 'var(--spacing-6)'
              }}
            >
              <Check className="icon-lg" style={{ 
                color: 'var(--color-accent-600)',
                flexShrink: 0
              }} />
              <div>
                <p style={{ 
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--color-accent-900)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  Odličan izbor!
                </p>
                <p style={{ 
                  fontSize: '1rem',
                  color: 'var(--color-accent-800)',
                  margin: 0
                }}>
                  Odabrali ste profil: <strong>{selectedProfileData.label}</strong>. 
                  Sada unesite vaš mjesečni iznos i nastavite dalje.
                </p>
              </div>
            </div>

            {/* Continue Button */}
            <button 
              className="btn btn-primary btn-lg"
              onClick={handleContinue}
              disabled={!customIncome || Number(customIncome) <= 0}
              style={{ 
                width: '100%',
                opacity: (!customIncome || Number(customIncome) <= 0) ? 0.5 : 1,
                cursor: (!customIncome || Number(customIncome) <= 0) ? 'not-allowed' : 'pointer'
              }}
              aria-label="Nastavi na sljedeći korak"
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Nastavi dalje</span>
              <ArrowRight className="icon" style={{ 
                width: '1.5rem', 
                height: '1.5rem',
                position: 'relative',
                zIndex: 1
              }} />
            </button>
          </div>
        )}
      </div>
      <BackToTop />
    </Layout>
  );
}