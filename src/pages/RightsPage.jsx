import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { VideoPlayer } from '../components/VideoPlayer';
import { 
  Shield,
  CheckCircle,
  CheckCircle2,
  XCircle,
  Info,
  ArrowRight,
  Lock,
  Unlock,
  Ban,
  TrendingUp,
  ChevronLeft,
  Sparkles,
  AlertCircle,
  AlertTriangle,
  ArrowDown,
  ArrowUp
} from 'lucide-react';

export function RightsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('allowed');
  const allowedSectionRef = useRef(null);
  const notAllowedSectionRef = useRef(null);
  const tabNavigationRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rights = [
    {
      title: 'Primanje naknade na račun',
      description: 'Banka mora omogućiti primanje socijalne naknade ili invalidnine.',
      isAllowed: true,
      details: 'Ovo je osnovno pravo. Banka ne može odbiti otvaranje osnovnog platnog računa za primanje socijalnih naknada.'
    },
    {
      title: 'Besplatno podizanje novca',
      description: 'Pravo na besplatno podizanje gotovine jednom mjesečno na šalterima banke.',
      isAllowed: true,
      details: 'Možeš podići novac bez naknade najmanje jednom mjesečno. Proveri uslove sa svojom bankom.'
    },
    {
      title: 'Plaćanje osnovnih računa',
      description: 'Mogućnost plaćanja kirije, komunalija i drugih računa.',
      isAllowed: true,
      details: 'Osnovni platni račun omogućava plaćanje svih osnovnih životnih troškova.'
    },
    {
      title: 'Zaštita od prinudne naplate',
      description: 'Određeni iznos je zaštićen od prinudne naplate.',
      isAllowed: true,
      details: 'Zakon štiti minimalni iznos potreban za život (egzistencijalni minimum). Ovaj iznos ne može biti predmet prinudne naplate.'
    },
    {
      title: 'Mjesečno održavanje besplatno ili simbolično',
      description: 'Osnovni platni račun ima niske ili nikakve troškove održavanja.',
      isAllowed: true,
      details: 'Za osnovni platni račun, banka može naplaćivati samo osnovne troškove ili biti potpuno besplatna.'
    },
    {
      title: 'Naplata visokih naknada',
      description: 'Banka NE SMIJE naplaćivati visoke naknade za osnovne usluge.',
      isAllowed: false,
      details: 'Visoke naknade za vođenje računa, podizanje novca ili plaćanje računa nisu dozvoljene za osnovni platni račun.'
    },
    {
      title: 'Oduzimanje kompletne naknade',
      description: 'Banka NE SMIJE oduzeti cijelu naknadu bez sudske odluke.',
      isAllowed: false,
      details: 'Čak i u slučaju duga, određeni dio naknade mora ostati nedirnut. To je egzistencijalni minimum zaštićen zakonom.'
    },
    {
      title: 'Odbijanje otvaranja računa osobi koja prima naknadu',
      description: 'Banka NE SMIJE odbiti otvaranje osnovnog računa.',
      isAllowed: false,
      details: 'Svako ima pravo na osnovni platni račun, uključujući primaoce socijalnih naknada.'
    },
    {
      title: 'Zatvaranje računa bez razloga',
      description: 'Banka NE SMIJE zatvoriti račun bez opravdanog razloga.',
      isAllowed: false,
      details: 'Račun može biti zatvoren samo u specifičnim slučajevima (npr. zloupotreba), ne proizvoljno.'
    },
    {
      title: 'Naplata skrivenih troškova',
      description: 'Banka NE SMIJE naplaćivati nedokumentovane ili skrivene troškove.',
      isAllowed: false,
      details: 'Svi troškovi moraju biti jasno navedeni u ugovoru i dostupni klijentu prije potpisivanja.'
    }
  ];

  const allowedRights = rights.filter(r => r.isAllowed);
  const notAllowedRights = rights.filter(r => !r.isAllowed);

  return (
    <Layout>
      {/* Decorative Background Blobs */}
      <div className="decorative-blob blob-secondary animate-float" style={{ 
        width: '400px', 
        height: '400px', 
        top: '100px', 
        right: '-120px' 
      }} />
      <div className="decorative-blob blob-primary animate-float" style={{ 
        width: '350px', 
        height: '350px', 
        bottom: '150px', 
        left: '-100px',
        animationDelay: '2s'
      }} />

      <div className="container container-narrow" style={{ minHeight: 'calc(100vh - 200px)' }}>
        {/* Header Section */}
        <div className="text-center animate-fade-in-down" style={{ marginBottom: 'var(--spacing-10)' }}>
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ 
            marginBottom: 'var(--spacing-6)',
            animationDelay: '0.1s',
            flexWrap: 'wrap'
          }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              background: 'linear-gradient(135deg, var(--color-secondary-500), var(--color-secondary-700))',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)'
            }}>
              <Shield className="icon-xl" style={{ color: 'white' }} />
            </div>
            <h1 style={{ margin: 0 }}>
              Tvoja prava na osnovni platni račun
            </h1>
          </div>

          {/* Subtitle */}
          <p className="animate-fade-in-up" style={{ 
            fontSize: '1.25rem',
            color: 'var(--color-gray-600)',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.7,
            animationDelay: '0.2s'
          }}>
            Upoznaj se sa svojim pravima i ograničenjima. Banka ima obaveze prema tebi, 
            ali i ti imaš pravo na zaštitu.
          </p>
        </div>

        {/* Video Player Section */}
        <VideoPlayer 
          title="Razumijevanje tvojih prava" 
          description="Saznaj detaljno koja prava imaš i šta banka ne smije da uradi kada posjeduješ osnovni platni račun"
        />

        {/* Important Alert */}
        <div 
          className="banner banner-info glass-strong animate-fade-in-up"
          style={{ 
            marginBottom: 'var(--spacing-12)',
            animationDelay: '0.3s'
          }}
        >
          <div style={{
            width: '3rem',
            height: '3rem',
            background: 'linear-gradient(135deg, var(--color-primary-100), var(--color-primary-200))',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <AlertTriangle className="icon-lg" style={{ color: 'var(--color-primary-600)' }} />
          </div>
          <div>
            <p style={{ 
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--color-primary-900)',
              marginBottom: 'var(--spacing-2)'
            }}>
              Važno za znanje
            </p>
            <p style={{ 
              fontSize: '1.125rem',
              color: 'var(--color-primary-800)',
              lineHeight: 1.7,
              margin: 0
            }}>
              Ova prava se odnose na osnovni platni račun. Ako imaš problema sa bankom 
              ili smatraš da ti prava nisu poštovana, kontaktiraj Agenciju za bankarstvo 
              ili organizaciju za zaštitu potrošača.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div 
          ref={tabNavigationRef}
          className="glass-strong animate-fade-in-up"
          style={{
            padding: 'var(--spacing-2)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--spacing-10)',
            border: '2px solid var(--color-gray-200)',
            animationDelay: '0.4s',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--spacing-2)',
            maxWidth: '700px',
            margin: '0 auto var(--spacing-10)'
          }}
        >
          {/* Tab 1 - Allowed */}
          <button
            className={activeTab === 'allowed' ? 'btn btn-primary' : 'btn btn-secondary'}
            onClick={() => setActiveTab('allowed')}
            style={{
              width: '100%',
              justifyContent: 'center',
              fontSize: '1.125rem',
              padding: 'var(--spacing-5) var(--spacing-6)',
              position: 'relative'
            }}
          >
            <Unlock className="icon" style={{ width: '1.25rem', height: '1.25rem', position: 'relative', zIndex: 1 }} />
            <span style={{ position: 'relative', zIndex: 1 }}>Šta banka SMIJE</span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '2rem',
              height: '2rem',
              padding: '0 0.5rem',
              background: activeTab === 'allowed' ? 'rgba(255, 255, 255, 0.3)' : 'var(--color-accent-100)',
              color: activeTab === 'allowed' ? 'white' : 'var(--color-accent-700)',
              borderRadius: 'var(--radius-full)',
              fontSize: '1rem',
              fontWeight: 700,
              position: 'relative',
              zIndex: 1
            }}>
              {allowedRights.length}
            </span>
          </button>

          {/* Tab 2 - Not Allowed */}
          <button
            className={activeTab === 'notAllowed' ? 'btn btn-primary' : 'btn btn-secondary'}
            onClick={() => setActiveTab('notAllowed')}
            style={{
              width: '100%',
              justifyContent: 'center',
              fontSize: '1.125rem',
              padding: 'var(--spacing-5) var(--spacing-6)',
              position: 'relative'
            }}
          >
            <Ban className="icon" style={{ width: '1.25rem', height: '1.25rem', position: 'relative', zIndex: 1 }} />
            <span style={{ position: 'relative', zIndex: 1 }}>Šta banka NE SMIJE</span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '2rem',
              height: '2rem',
              padding: '0 0.5rem',
              background: activeTab === 'notAllowed' ? 'rgba(255, 255, 255, 0.3)' : 'var(--color-danger-100)',
              color: activeTab === 'notAllowed' ? 'white' : 'var(--color-danger-700)',
              borderRadius: 'var(--radius-full)',
              fontSize: '1rem',
              fontWeight: 700,
              position: 'relative',
              zIndex: 1
            }}>
              {notAllowedRights.length}
            </span>
          </button>
        </div>

        {/* Tab Content - Allowed Rights */}
        {activeTab === 'allowed' && (
          <div className="animate-fade-in-up">
            {/* Section Header */}
            <div ref={allowedSectionRef} className="text-center" style={{ marginBottom: 'var(--spacing-10)' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, var(--color-accent-100), var(--color-accent-200))',
                borderRadius: 'var(--radius-2xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-6)'
              }}>
                <CheckCircle2 className="icon-xl" style={{ color: 'var(--color-accent-600)' }} />
              </div>
              <h2 style={{ 
                marginBottom: 'var(--spacing-4)',
                color: 'var(--color-accent-700)'
              }}>
                Tvoja prava
              </h2>
              <p style={{ 
                fontSize: '1.125rem',
                color: 'var(--color-gray-600)',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Ovo su stvari koje banka MORA omogućiti ili SMIJE činiti u okviru zakona.
              </p>
            </div>

            {/* Rights Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'var(--spacing-6)',
              marginBottom: 'var(--spacing-12)'
            }}>
              {allowedRights.map((right, index) => (
                <div
                  key={index}
                  className="finsim-card animate-fade-in-up"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent-50), white)',
                    borderColor: 'var(--color-accent-200)',
                    borderWidth: '2px',
                    animationDelay: `${0.5 + index * 0.1}s`
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    background: 'linear-gradient(135deg, var(--color-accent-100), var(--color-accent-200))',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--spacing-6)'
                  }}>
                    <CheckCircle2 className="icon-lg" style={{ color: 'var(--color-accent-600)' }} />
                  </div>

                  {/* Title */}
                  <h3 style={{ 
                    marginBottom: 'var(--spacing-3)',
                    fontSize: '1.375rem',
                    color: 'var(--color-gray-900)'
                  }}>
                    {right.title}
                  </h3>

                  {/* Description */}
                  <p style={{ 
                    fontSize: '1.125rem',
                    color: 'var(--color-gray-700)',
                    lineHeight: 1.7,
                    marginBottom: 'var(--spacing-6)',
                    fontWeight: 500
                  }}>
                    {right.description}
                  </p>

                  {/* Details Box */}
                  <div style={{
                    padding: 'var(--spacing-4)',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '2px solid var(--color-accent-200)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    gap: 'var(--spacing-3)'
                  }}>
                    <Info className="icon" style={{ 
                      color: 'var(--color-accent-600)',
                      flexShrink: 0,
                      marginTop: '0.25rem'
                    }} />
                    <p style={{ 
                      fontSize: '1rem',
                      color: 'var(--color-accent-800)',
                      lineHeight: 1.7,
                      margin: 0
                    }}>
                      {right.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button to switch to Not Allowed tab */}
            <div style={{ 
              textAlign: 'center',
              marginTop: 'var(--spacing-10)',
              marginBottom: 'var(--spacing-4)'
            }}>
              <button
                className="btn-nav-modern btn-nav-red"
                onClick={() => {
                  setActiveTab('notAllowed');
                  setTimeout(() => {
                    tabNavigationRef.current?.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'center' 
                    });
                  }, 100);
                }}
              >
                <Ban style={{ 
                  width: '1.75rem', 
                  height: '1.75rem'
                }} />
                <span>Vidi šta banka NE SMIJE</span>
                <ArrowRight style={{ 
                  width: '1.75rem', 
                  height: '1.75rem'
                }} />
              </button>
            </div>
          </div>
        )}

        {/* Tab Content - Not Allowed Rights */}
        {activeTab === 'notAllowed' && (
          <div className="animate-fade-in-up">
            {/* Section Header */}
            <div ref={notAllowedSectionRef} className="text-center" style={{ marginBottom: 'var(--spacing-10)' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, var(--color-danger-100), var(--color-danger-200))',
                borderRadius: 'var(--radius-2xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-6)'
              }}>
                <XCircle className="icon-xl" style={{ color: 'var(--color-danger-600)' }} />
              </div>
              <h2 style={{ 
                marginBottom: 'var(--spacing-4)',
                color: 'var(--color-danger-700)'
              }}>
                Ograničenja banke
              </h2>
              <p style={{ 
                fontSize: '1.125rem',
                color: 'var(--color-gray-600)',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Ovo su stvari koje banka NE SMIJE činiti. Ako se ovo dogodi, imaš pravo prigovora.
              </p>
            </div>

            {/* Rights Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'var(--spacing-6)',
              marginBottom: 'var(--spacing-12)'
            }}>
              {notAllowedRights.map((right, index) => (
                <div
                  key={index}
                  className="finsim-card animate-fade-in-up"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-danger-50), white)',
                    borderColor: 'var(--color-danger-200)',
                    borderWidth: '2px',
                    animationDelay: `${0.5 + index * 0.1}s`
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    background: 'linear-gradient(135deg, var(--color-danger-100), var(--color-danger-200))',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--spacing-6)'
                  }}>
                    <XCircle className="icon-lg" style={{ color: 'var(--color-danger-600)' }} />
                  </div>

                  {/* Title */}
                  <h3 style={{ 
                    marginBottom: 'var(--spacing-3)',
                    fontSize: '1.375rem',
                    color: 'var(--color-gray-900)'
                  }}>
                    {right.title}
                  </h3>

                  {/* Description */}
                  <p style={{ 
                    fontSize: '1.125rem',
                    color: 'var(--color-gray-700)',
                    lineHeight: 1.7,
                    marginBottom: 'var(--spacing-6)',
                    fontWeight: 500
                  }}>
                    {right.description}
                  </p>

                  {/* Details Box */}
                  <div style={{
                    padding: 'var(--spacing-4)',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '2px solid var(--color-danger-200)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    gap: 'var(--spacing-3)'
                  }}>
                    <AlertCircle className="icon" style={{ 
                      color: 'var(--color-danger-600)',
                      flexShrink: 0,
                      marginTop: '0.25rem'
                    }} />
                    <p style={{ 
                      fontSize: '1rem',
                      color: 'var(--color-danger-800)',
                      lineHeight: 1.7,
                      margin: 0
                    }}>
                      {right.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button to switch to Allowed tab */}
            <div style={{ 
              textAlign: 'center',
              marginTop: 'var(--spacing-10)',
              marginBottom: 'var(--spacing-4)'
            }}>
              <button
                className="btn-nav-modern btn-nav-green"
                onClick={() => {
                  setActiveTab('allowed');
                  setTimeout(() => {
                    tabNavigationRef.current?.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'center' 
                    });
                  }, 100);
                }}
              >
                <Unlock style={{ 
                  width: '1.75rem', 
                  height: '1.75rem'
                }} />
                <span>Vidi šta banka SMIJE</span>
                <ArrowRight style={{ 
                  width: '1.75rem', 
                  height: '1.75rem'
                }} />
              </button>
            </div>
          </div>
        )}

        {/* Summary Card */}
        <div 
          className="finsim-card animate-fade-in-up"
          style={{
            background: 'linear-gradient(135deg, var(--color-secondary-600), var(--color-primary-600))',
            border: 'none',
            marginBottom: 'var(--spacing-12)',
            padding: 'var(--spacing-12)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Sparkles */}
          <div style={{
            position: 'absolute',
            top: 'var(--spacing-6)',
            right: 'var(--spacing-6)',
            opacity: 0.2
          }}>
            <Sparkles className="icon-xl" style={{ color: 'white', width: '5rem', height: '5rem' }} />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 'var(--spacing-8)',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Icon */}
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              backdropFilter: 'blur(10px)'
            }}>
              <Lock className="icon-xl" style={{ color: 'white' }} />
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                color: 'white',
                marginBottom: 'var(--spacing-4)',
                fontSize: '1.75rem'
              }}>
                Zapamti ovo!
              </h3>
              <p style={{ 
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.95)',
                lineHeight: 1.7,
                margin: 0
              }}>
                Uvijek imaš pravo da pitaš banku za objašnjenje svih troškova i odluka. 
                Ne dozvoli da te neko obeshrabri ili zbuni složenim rječnikom. 
                Tvoja prava su zaštićena zakonom.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div 
          className="flex justify-between animate-fade-in-up"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 'var(--spacing-4)',
            paddingTop: 'var(--spacing-8)',
            flexWrap: 'wrap'
          }}
        >
          <button 
            className="btn btn-outline btn-lg"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/profil');
            }}
          >
            <ChevronLeft className="icon" style={{ width: '1.5rem', height: '1.5rem' }} />
            <span>Natrag na profil</span>
          </button>

          <button 
            className="btn btn-primary btn-lg"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/simulator');
            }}
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
      </div>
      <BackToTop />
    </Layout>
  );
}