import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Home, User, Shield, ListChecks, Calculator, Lock, Mail, HelpCircle, FileText, Twitter, Linkedin, Github, BookOpen, TrendingUp, Heart } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TextToSpeech } from './TextToSpeech';
import { ChatBot } from './ChatBot';
import { useTranslation } from '../hooks/useTranslation';

interface LayoutProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export function Layout({ children, maxWidth = 'xl' }: LayoutProps) {
  const location = useLocation();
  const { t } = useTranslation();
  
  // Scroll to top on route change - AGGRESSIVE FIX
  useEffect(() => {
    // Multiple fallbacks to ensure scroll works
    window.scrollTo(0, 0);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);
  
  // Check if profile is selected
  const hasProfile = typeof window !== 'undefined' ? localStorage.getItem('selectedProfile') !== null : false;
  
  const maxWidthClass = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1400px]',
    full: 'max-w-full'
  }[maxWidth];

  const navItems = [
    { path: '/', icon: Home, label: t('nav.home'), locked: false },
    { path: '/koraci', icon: ListChecks, label: t('nav.steps'), locked: false },
    { path: '/profil', icon: User, label: t('nav.profile'), locked: false },
    { path: '/prava', icon: Shield, label: t('nav.rights'), locked: !hasProfile },
    { path: '/simulator', icon: Calculator, label: t('nav.simulator'), locked: !hasProfile },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-gray-50)', position: 'relative' }}>
      {/* Accessibility & Support Tools */}
      <TextToSpeech />
      <ChatBot />
      
      {/* Premium Navigation with Glass Effect */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--color-gray-200)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.4) inset'
      }}>
        <div className="w-full">
          <div className="flex items-center justify-between" style={{ height: '72px', paddingLeft: '24px', paddingRight: '24px' }}>
            {/* Premium Logo - Financial Education Themed */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group" 
              style={{ textDecoration: 'none' }}
              onClick={() => {
                // Force scroll to top immediately on click
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7e22ce 100%)',
                padding: '10px',
                borderRadius: '14px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08) rotate(-5deg)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 99, 235, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}>
                <GraduationCap style={{ width: '28px', height: '28px', color: 'white', strokeWidth: 2.5 }} />
              </div>
              <div>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #2563eb, #7e22ce)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  display: 'block'
                }}>
                  FinSim
                </span>
                <span className="hidden sm:block" style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-900)',
                  letterSpacing: '-0.01em',
                  marginTop: '2px',
                  lineHeight: 1.2
                }}>
                  {t('layout.tagline')}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                const isLocked = item.locked;
                
                if (isLocked) {
                  return (
                    <div
                      key={item.path}
                      className="flex items-center gap-2"
                      style={{
                        padding: '10px 18px',
                        borderRadius: '12px',
                        color: 'var(--color-gray-400)',
                        cursor: 'not-allowed',
                        opacity: 0.5,
                        fontSize: '0.9375rem',
                        fontWeight: 600
                      }}
                      title={t('common.selectProfileFirst')}
                    >
                      <Lock style={{ width: '18px', height: '18px', strokeWidth: 2.5 }} />
                      <span>{item.label}</span>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-2"
                    onClick={() => {
                      // Force scroll to top immediately on click
                      window.scrollTo(0, 0);
                      document.documentElement.scrollTop = 0;
                      document.body.scrollTop = 0;
                    }}
                    style={{
                      padding: '10px 18px',
                      borderRadius: '12px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      textDecoration: 'none',
                      background: isActive ? 'linear-gradient(135deg, var(--color-primary-50), var(--color-secondary-50))' : 'transparent',
                      color: isActive ? 'var(--color-primary-700)' : 'var(--color-gray-600)',
                      fontWeight: isActive ? 700 : 600,
                      fontSize: '0.9375rem',
                      boxShadow: isActive ? '0 2px 8px rgba(37, 99, 235, 0.15)' : 'none',
                      border: isActive ? '1px solid var(--color-primary-200)' : '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'var(--color-gray-100)';
                        e.currentTarget.style.color = 'var(--color-gray-900)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--color-gray-600)';
                      }
                    }}
                  >
                    <Icon style={{ width: '18px', height: '18px', strokeWidth: 2.5 }} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Premium Bottom Bar */}
      <div className="md:hidden" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--color-gray-200)',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.08), 0 -1px 0 rgba(255, 255, 255, 0.4) inset',
        padding: '8px 8px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            const isLocked = item.locked;
            
            if (isLocked) {
              return (
                <div
                  key={item.path}
                  style={{
                    padding: '12px 8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    opacity: 0.3,
                    cursor: 'not-allowed',
                    minWidth: '52px'
                  }}
                >
                  <Lock style={{ width: '22px', height: '22px', strokeWidth: 2.5, color: 'var(--color-gray-400)' }} />
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-gray-400)' }}>
                    {item.label}
                  </span>
                </div>
              );
            }
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  // Force scroll to top immediately on click
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
                style={{
                  padding: '12px 8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: isActive ? 'linear-gradient(135deg, var(--color-primary-50), var(--color-secondary-50))' : 'transparent',
                  minWidth: '52px'
                }}
              >
                <Icon 
                  style={{ 
                    width: '22px', 
                    height: '22px', 
                    strokeWidth: 2.5,
                    color: isActive ? 'var(--color-primary-600)' : 'var(--color-gray-500)'
                  }} 
                />
                <span style={{ 
                  fontSize: '0.7rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--color-primary-600)' : 'var(--color-gray-600)'
                }}>
                  {item.label}
                </span>
              </Link>
            );
          })}
          {/* Language Switcher for Mobile */}
          <LanguageSwitcher isMobile={true} />
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full" style={{ paddingTop: '32px', paddingBottom: '96px' }}>
        {children}
      </main>

      {/* Ultra-Modern Premium Footer */}
      <footer style={{
        background: 'linear-gradient(180deg, white 0%, rgba(219, 234, 254, 0.3) 100%)',
        borderTop: '2px solid var(--color-gray-200)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(126, 34, 206, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div className="w-full" style={{ padding: '80px 24px 32px', position: 'relative', zIndex: 1 }}>
          {/* Top Section - Brand & Trust Badges */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto var(--spacing-16)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--spacing-10)'
            }}>
              {/* Brand Column */}
              <div>
                <div className="flex items-center gap-3" style={{ marginBottom: 'var(--spacing-6)' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #2563eb, #7e22ce)',
                    padding: '12px',
                    borderRadius: '14px',
                    boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)'
                  }}>
                    <GraduationCap style={{ width: '32px', height: '32px', color: 'white', strokeWidth: 2.5 }} />
                  </div>
                  <div>
                    <span style={{
                      fontSize: '2rem',
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, #2563eb, #7e22ce)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      letterSpacing: '-0.02em'
                    }}>
                      FinSim
                    </span>
                    <p style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-gray-500)',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      marginTop: '2px'
                    }}>
                      {t('layout.educationLabel')}
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--color-gray-700)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--spacing-6)',
                  fontWeight: 500
                }}>
                  {t('layout.footerDescription')}
                </p>
                
                {/* Trust Badges */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-3)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    padding: '10px 16px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(34, 197, 94, 0.3)'
                  }}>
                    <Shield style={{ width: '20px', height: '20px', color: 'var(--color-accent-600)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-accent-700)' }}>
                      {t('layout.trustBadges.free')}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    padding: '10px 16px',
                    background: 'rgba(37, 99, 235, 0.1)',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(37, 99, 235, 0.3)'
                  }}>
                    <Lock style={{ width: '20px', height: '20px', color: 'var(--color-primary-600)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-primary-700)' }}>
                      {t('layout.trustBadges.noRealData')}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    padding: '10px 16px',
                    background: 'rgba(126, 34, 206, 0.1)',
                    borderRadius: '12px',
                    border: '1.5px solid rgba(126, 34, 206, 0.3)'
                  }}>
                    <Heart style={{ width: '20px', height: '20px', color: 'var(--color-secondary-600)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-secondary-700)', lineHeight: 1.5 }}>
                      {t('layout.trustBadges.accessible')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Links Grid - Responsive */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-8)'
              }}>
                {/* Quick Links Column */}
                <div>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-gray-900)',
                    marginBottom: 'var(--spacing-5)',
                    letterSpacing: '-0.01em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)'
                  }}>
                    <TrendingUp style={{ width: '20px', height: '20px', color: 'var(--color-primary-600)' }} />
                    {t('layout.quickLinks')}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { label: t('nav.home'), path: '/' },
                      { label: t('nav.steps'), path: '/koraci' },
                      { label: t('nav.profile'), path: '/profil' },
                      { label: t('nav.rights'), path: '/prava' },
                      { label: t('nav.simulator'), path: '/simulator' }
                    ].map((link) => (
                      <li key={link.path} style={{ marginBottom: 'var(--spacing-3)' }}>
                        <Link
                          to={link.path}
                          onClick={() => {
                            window.scrollTo(0, 0);
                            document.documentElement.scrollTop = 0;
                            document.body.scrollTop = 0;
                          }}
                          style={{
                            color: 'var(--color-gray-600)',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: 500,
                            transition: 'all 0.2s',
                            display: 'inline-block'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--color-primary-600)';
                            e.currentTarget.style.transform = 'translateX(4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--color-gray-600)';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Help & Support Column */}
                <div>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-gray-900)',
                    marginBottom: 'var(--spacing-5)',
                    letterSpacing: '-0.01em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)'
                  }}>
                    <BookOpen style={{ width: '20px', height: '20px', color: 'var(--color-secondary-600)' }} />
                    {t('layout.helpSupport')}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: 'var(--spacing-3)' }}>
                      <a
                        href="mailto:podrska@finsim.ba"
                        style={{
                          color: 'var(--color-gray-600)',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-2)',
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-600)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-600)'}
                      >
                        <Mail style={{ width: '16px', height: '16px' }} />
                        {t('layout.helpItems.email')}
                      </a>
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-3)' }}>
                      <a
                        href="#"
                        style={{
                          color: 'var(--color-gray-600)',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-2)',
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-600)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-600)'}
                      >
                        <HelpCircle style={{ width: '16px', height: '16px' }} />
                        {t('layout.helpItems.faq')}
                      </a>
                    </li>
                    <li style={{ marginBottom: 'var(--spacing-3)' }}>
                      <a
                        href="#"
                        style={{
                          color: 'var(--color-gray-600)',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-2)',
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-600)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-600)'}
                      >
                        <FileText style={{ width: '16px', height: '16px' }} />
                        {t('layout.helpItems.terms')}
                      </a>
                    </li>
                  </ul>

                  {/* Social Links */}
                  <div style={{ display: 'flex', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-5)' }}>
                    {[
                      { icon: Twitter, href: '#', label: 'Twitter' },
                      { icon: Linkedin, href: '#', label: 'LinkedIn' },
                      { icon: Github, href: '#', label: 'GitHub' }
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        aria-label={social.label}
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          background: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s',
                          border: '2px solid var(--color-gray-200)',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--color-primary-50)';
                          e.currentTarget.style.borderColor = 'var(--color-primary-300)';
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(37, 99, 235, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'white';
                          e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                        }}
                      >
                        <social.icon style={{ width: '20px', height: '20px', color: 'var(--color-gray-600)' }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Enhanced Design */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: 'var(--spacing-8)',
            marginTop: 'var(--spacing-8)',
            borderTop: '2px solid var(--color-gray-200)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-4)',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-gray-600)',
              fontWeight: 500,
              lineHeight: 1.6,
              margin: 0
            }}>
              {t('layout.footerNotice')}
            </p>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-gray-500)',
              fontWeight: 500,
              margin: 0
            }}>
              © {new Date().getFullYear()} {t('layout.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}