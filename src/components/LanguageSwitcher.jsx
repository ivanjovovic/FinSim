import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher({ isMobile = false }) {
  const { language, toggleLanguage } = useLanguage();

  if (isMobile) {
    return (
      <button
        onClick={toggleLanguage}
        aria-label={`Switch to ${language === 'me' ? 'English' : 'Montenegrin'}`}
        style={{
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          textDecoration: 'none',
          borderRadius: '12px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'linear-gradient(135deg, var(--color-primary-50), var(--color-secondary-50))',
          minWidth: '60px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <Globe 
          style={{ 
            width: '22px', 
            height: '22px', 
            strokeWidth: 2.5,
            color: 'var(--color-primary-600)'
          }} 
        />
        <span style={{ 
          fontSize: '0.75rem',
          fontWeight: 700,
          color: 'var(--color-primary-600)'
        }}>
          {language === 'me' ? 'CG' : 'EN'}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2"
      aria-label={`Switch to ${language === 'me' ? 'English' : 'Montenegrin'}`}
      style={{
        padding: '10px 18px',
        borderRadius: '12px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'linear-gradient(135deg, var(--color-primary-50), var(--color-secondary-50))',
        color: 'var(--color-primary-700)',
        fontWeight: 700,
        fontSize: '0.9375rem',
        boxShadow: '0 2px 8px rgba(37, 99, 235, 0.15)',
        border: '1px solid var(--color-primary-200)',
        cursor: 'pointer',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-primary-100), var(--color-secondary-100))';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-primary-50), var(--color-secondary-50))';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.15)';
      }}
    >
      <Globe style={{ width: '18px', height: '18px', strokeWidth: 2.5 }} />
      <span>{language === 'me' ? 'CG' : 'EN'}</span>
    </button>
  );
}
