import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from './Layout';
import { Lock, ArrowRight } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const hasProfile = typeof window !== 'undefined' ? localStorage.getItem('selectedProfile') !== null : false;

  useEffect(() => {
    if (!hasProfile) {
      // Show message briefly before redirecting
      const timer = setTimeout(() => {
        navigate('/profil');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [hasProfile, navigate]);

  if (!hasProfile) {
    return (
      <Layout>
        <div className="container container-narrow" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <div className="flex items-center justify-center" style={{ minHeight: '60vh' }}>
            <div 
              className="finsim-card glass-strong text-center animate-scale-in"
              style={{ 
                maxWidth: '600px',
                padding: 'var(--spacing-12)',
                borderColor: 'var(--color-warning-500)',
                borderWidth: '2px',
                boxShadow: 'var(--shadow-xl), 0 0 30px rgba(245, 158, 11, 0.3)'
              }}
            >
              {/* Lock Icon */}
              <div style={{
                width: '5rem',
                height: '5rem',
                background: 'linear-gradient(135deg, var(--color-warning-100), var(--color-warning-200))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-8)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <Lock className="icon-xl" style={{ color: 'var(--color-warning-600)' }} />
              </div>

              {/* Title */}
              <h1 style={{ 
                marginBottom: 'var(--spacing-6)',
                color: 'var(--color-gray-900)',
                fontSize: '2rem'
              }}>
                Pristup Zaključan
              </h1>

              {/* Message */}
              <p style={{ 
                fontSize: '1.25rem',
                color: 'var(--color-gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--spacing-8)'
              }}>
                Prvo morate odabrati svoj profil na strani <strong>Profil</strong> da biste pristupili ovom sadržaju.
              </p>

              {/* Redirect Message */}
              <div 
                className="banner banner-warning glass"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-4)',
                  justifyContent: 'center'
                }}
              >
                <ArrowRight className="icon animate-pulse" style={{ color: 'var(--color-warning-600)' }} />
                <p style={{ 
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--color-warning-900)',
                  margin: 0
                }}>
                  Preusmjeravanje na Profil...
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return <>{children}</>;
}
