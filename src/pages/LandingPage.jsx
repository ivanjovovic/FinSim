import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { VideoPlayer } from '../components/VideoPlayer';
import { useTranslation } from '../hooks/useTranslation';
import { 
  Target,
  Shield,
  Calculator,
  Sparkles,
  ArrowRight,
  AlertCircle,
  TrendingUp,
  BookOpen,
  CheckCircle,
  Users,
  Lock
} from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const hasProfile = typeof window !== 'undefined' ? localStorage.getItem('selectedProfile') !== null : false;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (path) => {
    // Scroll to top before navigation
    window.scrollTo(0, 0);
    
    // If trying to access locked pages without profile, redirect to profile
    if ((path === '/prava' || path === '/simulator') && !hasProfile) {
      navigate('/profil');
    } else {
      navigate(path);
    }
  };

  return (
    <Layout>
      {/* Premium Decorative Background with Layered Gradients */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        {/* Primary Gradient Orb */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '-100px',
          right: '-150px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 20s ease-in-out infinite'
        }} />
        
        {/* Secondary Gradient Orb */}
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          bottom: '100px',
          left: '-100px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(147, 51, 234, 0.04) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 25s ease-in-out infinite',
          animationDelay: '2s'
        }} />

        {/* Accent Orb */}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 30s ease-in-out infinite',
          animationDelay: '5s'
        }} />
      </div>

      <div className="container container-narrow" style={{ position: 'relative', zIndex: 1 }}>
        {/* Premium Warning Banner with Glass Effect */}
        <div className="animate-fade-in-down" 
             style={{ 
               marginBottom: 'var(--spacing-8)',
               background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.1))',
               backdropFilter: 'blur(20px)',
               border: '1.5px solid rgba(245, 158, 11, 0.3)',
               borderRadius: '14px',
               padding: 'var(--spacing-6)',
               display: 'flex',
               gap: 'var(--spacing-4)',
               alignItems: 'flex-start',
               boxShadow: '0 8px 32px rgba(245, 158, 11, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
             }} 
             role="alert">
          <div style={{
            background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
            borderRadius: '10px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(251, 191, 36, 0.2)'
          }}>
            <AlertCircle style={{ 
              width: '24px', 
              height: '24px',
              color: 'var(--color-warning-700)',
              strokeWidth: 2.5
            }} />
          </div>
          <div>
            <p style={{ 
              fontWeight: 700, 
              marginBottom: 'var(--spacing-2)', 
              fontSize: '1.125rem', 
              color: 'var(--color-warning-900)',
              letterSpacing: '-0.01em'
            }}>
              {t('landing.warning.title')}
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--color-warning-800)',
              lineHeight: 1.6,
              fontWeight: 500
            }}>
              {t('landing.warning.description')}
            </p>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
          {/* Premium Animated Badge */}
          <div className="animate-scale-in" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-3)',
            background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.8), rgba(191, 219, 254, 0.8))',
            backdropFilter: 'blur(12px)',
            padding: '12px 24px',
            borderRadius: '50px',
            marginBottom: 'var(--spacing-8)',
            border: '1.5px solid rgba(96, 165, 250, 0.4)',
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2), 0 2px 4px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--color-primary-700)',
            letterSpacing: '-0.01em'
          }}>
            <TrendingUp style={{ width: '20px', height: '20px', strokeWidth: 2.5 }} />
            <span>{t('landing.hero.badge')}</span>
          </div>

          {/* Premium Gradient Title */}
          <h1 className="animate-fade-in-up" style={{ 
            animationDelay: '0.2s',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #7e22ce 70%, #9333ea 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'var(--spacing-6)',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            textShadow: '0 2px 40px rgba(37, 99, 235, 0.2)'
          }}>
            {t('landing.hero.title')}
          </h1>

          {/* Enhanced Subtitle */}
          <p className="animate-fade-in-up" style={{ 
            animationDelay: '0.3s',
            fontSize: '1.75rem',
            fontWeight: 600,
            color: 'var(--color-gray-700)',
            marginBottom: 'var(--spacing-6)',
            letterSpacing: '-0.02em',
            lineHeight: 1.4
          }}>
            {t('landing.hero.subtitle')}
          </p>

          {/* Premium Description */}
          <p className="animate-fade-in-up" style={{ 
            fontSize: '1.25rem',
            color: 'var(--color-gray-600)',
            maxWidth: '800px',
            margin: '0 auto var(--spacing-12)',
            lineHeight: 1.7,
            animationDelay: '0.4s',
            fontWeight: 500
          }}>
            {t('landing.hero.description')}
          </p>

          {/* Premium CTA Buttons */}
          <div 
            className="animate-fade-in-up" 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--spacing-5)',
              marginBottom: 'var(--spacing-16)',
              animationDelay: '0.5s',
              flexWrap: 'wrap',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => handleNavigate('/koraci')}
              aria-label="Započni sa prvim korakom"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                padding: '18px 36px',
                fontSize: '1.125rem',
                fontWeight: 700,
                borderRadius: '14px',
                border: 'none',
                boxShadow: '0 8px 30px rgba(37, 99, 235, 0.35), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(37, 99, 235, 0.45), 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 99, 235, 0.35), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>
                {t('landing.hero.cta')}
                <ArrowRight style={{ width: '22px', height: '22px' }} />
              </span>
            </button>
            
            <button 
              className="btn btn-secondary btn-lg"
              onClick={() => handleNavigate('/profil')}
              aria-label={t('landing.journey.step2.action')}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '18px 36px',
                fontSize: '1.125rem',
                fontWeight: 700,
                borderRadius: '14px',
                border: '2px solid var(--color-gray-200)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                color: 'var(--color-gray-700)',
                letterSpacing: '-0.01em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 1)';
                e.currentTarget.style.borderColor = 'var(--color-gray-300)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)';
                e.currentTarget.style.borderColor = 'var(--color-gray-200)';
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Users style={{ width: '22px', height: '22px' }} />
                {t('landing.journey.step2.action')}
              </span>
            </button>
          </div>
        </div>

        {/* Video Player Section */}
        <VideoPlayer 
          title={t('landing.videoIntro.title')} 
          description={t('landing.videoIntro.description')}
        />

        {/* MOVED: Zašto koristiti FinSim - NOW AT TOP */}
        <div className="finsim-card animate-fade-in-up" 
             style={{ 
               marginBottom: 'var(--spacing-16)',
               animationDelay: '0.6s'
             }}>
          <div className="text-center" style={{ marginBottom: 'var(--spacing-10)' }}>
            <BookOpen className="icon-xl" style={{ 
              color: 'var(--color-primary-600)', 
              margin: '0 auto var(--spacing-6)',
              display: 'block'
            }} />
            <h2 style={{ marginBottom: 'var(--spacing-4)' }}>
              {t('landing.whyUse.title')}
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-gray-600)', maxWidth: '700px', margin: '0 auto' }}>
              {t('landing.whyUse.subtitle')}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-8)'
          }}>
            {/* Feature 1 */}
            <div className="flex gap-4">
              <CheckCircle className="icon-lg" style={{ color: 'var(--color-accent-500)', flexShrink: 0 }} />
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
                  {t('landing.whyUse.simple.title')}
                </h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.7 }}>
                  {t('landing.whyUse.simple.description')}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <CheckCircle className="icon-lg" style={{ color: 'var(--color-accent-500)', flexShrink: 0 }} />
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
                  {t('landing.whyUse.free.title')}
                </h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.7 }}>
                  {t('landing.whyUse.free.description')}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <CheckCircle className="icon-lg" style={{ color: 'var(--color-accent-500)', flexShrink: 0 }} />
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
                  {t('landing.whyUse.safe.title')}
                </h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.7 }}>
                  {t('landing.whyUse.safe.description')}
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <CheckCircle className="icon-lg" style={{ color: 'var(--color-accent-500)', flexShrink: 0 }} />
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
                  {t('landing.whyUse.accessible.title')}
                </h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.7 }}>
                  {t('landing.whyUse.accessible.description')}
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-4">
              <CheckCircle className="icon-lg" style={{ color: 'var(--color-accent-500)', flexShrink: 0 }} />
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
                  {t('landing.whyUse.practical.title')}
                </h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.7 }}>
                  {t('landing.whyUse.practical.description')}
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-4">
              <CheckCircle className="icon-lg" style={{ color: 'var(--color-accent-500)', flexShrink: 0 }} />
              <div>
                <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
                  {t('landing.whyUse.mobile.title')}
                </h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.7 }}>
                  {t('landing.whyUse.mobile.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'var(--spacing-8)',
          marginBottom: 'var(--spacing-16)',
          maxWidth: '1200px',
          margin: '0 auto var(--spacing-16)'
        }}>
          {/* Card 1 - Profil */}
          <div 
            className="animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
            onClick={() => handleNavigate('/profil')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigate('/profil');
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Upoznaj svoj profil: Ko si i šta primaš"
          >
            <div style={{
              background: 'white',
              borderRadius: '18px',
              border: '2px solid var(--color-gray-200)',
              padding: 'var(--spacing-10)',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(37, 99, 235, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'var(--color-primary-300)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.borderColor = 'var(--color-gray-200)';
            }}
            >
              {/* Gradient overlay effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, var(--color-primary-500), var(--color-primary-600))',
                borderRadius: '18px 18px 0 0'
              }} />
              
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto var(--spacing-6)',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.5)',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
                <Target style={{ 
                  width: '40px', 
                  height: '40px',
                  color: 'var(--color-primary-600)',
                  strokeWidth: 2
                }} />
              </div>
              
              <h3 style={{ 
                marginBottom: 'var(--spacing-4)', 
                color: 'var(--color-gray-900)',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}>
                {t('landing.cards.profile.title')}
              </h3>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: 'var(--color-gray-700)', 
                marginBottom: 'var(--spacing-5)',
                lineHeight: 1.6,
                fontWeight: 600
              }}>
                {t('landing.cards.profile.subtitle')}
              </p>

              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--color-gray-500)', 
                marginBottom: 'var(--spacing-8)',
                lineHeight: 1.7,
                fontWeight: 500
              }}>
                {t('landing.cards.profile.description')}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-2)',
                color: 'var(--color-primary-600)',
                fontWeight: 700,
                fontSize: '1.0625rem',
                letterSpacing: '-0.01em'
              }}>
                <span>{t('landing.cards.profile.action')}</span>
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>

          {/* Card 2 - Prava */}
          <div 
            className="animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
            onClick={() => handleNavigate('/prava')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigate('/prava');
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Saznaj svoja prava: Šta banka smije i ne smije"
          >
            <div style={{
              background: 'white',
              borderRadius: '18px',
              border: '2px solid var(--color-gray-200)',
              padding: 'var(--spacing-10)',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(147, 51, 234, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'var(--color-secondary-300)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.borderColor = 'var(--color-gray-200)';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, var(--color-secondary-500), var(--color-secondary-600))',
                borderRadius: '18px 18px 0 0'
              }} />
              
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto var(--spacing-6)',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #F3E8FF, #E9D5FF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(147, 51, 234, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.5)',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
                <Shield style={{ 
                  width: '40px', 
                  height: '40px',
                  color: 'var(--color-secondary-600)',
                  strokeWidth: 2
                }} />
              </div>
              
              <h3 style={{ 
                marginBottom: 'var(--spacing-4)', 
                color: 'var(--color-gray-900)',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}>
                {t('landing.cards.rights.title')}
              </h3>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: 'var(--color-gray-700)', 
                marginBottom: 'var(--spacing-5)',
                lineHeight: 1.6,
                fontWeight: 600
              }}>
                {t('landing.cards.rights.subtitle')}
              </p>

              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--color-gray-500)', 
                marginBottom: 'var(--spacing-8)',
                lineHeight: 1.7,
                fontWeight: 500
              }}>
                {t('landing.cards.rights.description')}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-2)',
                color: 'var(--color-secondary-600)',
                fontWeight: 700,
                fontSize: '1.0625rem',
                letterSpacing: '-0.01em'
              }}>
                <span>{t('landing.cards.rights.action')}</span>
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>

          {/* Card 3 - Simulator */}
          <div 
            className="animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
            onClick={() => handleNavigate('/simulator')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigate('/simulator');
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Probaj simulator: Vježbaj sa lažnim novcem"
          >
            <div style={{
              background: 'white',
              borderRadius: '18px',
              border: '2px solid var(--color-gray-200)',
              padding: 'var(--spacing-10)',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(34, 197, 94, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'var(--color-accent-300)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.borderColor = 'var(--color-gray-200)';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, var(--color-accent-500), var(--color-accent-600))',
                borderRadius: '18px 18px 0 0'
              }} />
              
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto var(--spacing-6)',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(34, 197, 94, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.5)',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
                <Calculator style={{ 
                  width: '40px', 
                  height: '40px',
                  color: 'var(--color-accent-600)',
                  strokeWidth: 2
                }} />
              </div>
              
              <h3 style={{ 
                marginBottom: 'var(--spacing-4)', 
                color: 'var(--color-gray-900)',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}>
                {t('landing.cards.simulator.title')}
              </h3>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: 'var(--color-gray-700)', 
                marginBottom: 'var(--spacing-5)',
                lineHeight: 1.6,
                fontWeight: 600
              }}>
                {t('landing.cards.simulator.subtitle')}
              </p>

              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--color-gray-500)', 
                marginBottom: 'var(--spacing-8)',
                lineHeight: 1.7,
                fontWeight: 500
              }}>
                {t('landing.cards.simulator.description')}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-2)',
                color: 'var(--color-accent-600)',
                fontWeight: 700,
                fontSize: '1.0625rem',
                letterSpacing: '-0.01em'
              }}>
                <span>{t('landing.cards.simulator.action')}</span>
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="glass-strong animate-fade-in-up" 
             style={{ 
               padding: 'var(--spacing-12)',
               borderRadius: 'var(--radius-2xl)',
               textAlign: 'center',
               marginBottom: 'var(--spacing-16)',
               border: '2px solid var(--color-gray-200)',
               animationDelay: '1s'
             }}>
          <h2 style={{ marginBottom: 'var(--spacing-6)' }}>
            {t('landing.bottomCta.title')}
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--color-gray-600)', 
            marginBottom: 'var(--spacing-8)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-8)'
          }}>
            {t('landing.bottomCta.description')}
          </p>
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => handleNavigate('/koraci')}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>{t('landing.bottomCta.button')}</span>
            <ArrowRight className="icon" style={{ width: '1.5rem', height: '1.5rem', position: 'relative', zIndex: 1 }} />
          </button>
        </div>
      </div>
      <BackToTop />
    </Layout>
  );
}