import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { VideoPlayer } from '../components/VideoPlayer';
import { 
  Calculator, 
  TrendingUp,
  DollarSign,
  Home,
  Heart,
  Bus,
  Baby,
  Utensils,
  Plus,
  Minus,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Info,
  ChevronLeft,
  Sparkles,
  PiggyBank,
  Target,
  Lightbulb,
  Zap,
  Shield,
  Activity,
  Film,
  Shirt,
  GraduationCap,
  HandHeart,
  AlertTriangle,
  CreditCard,
  Download,
  Printer,
  ArrowUp
} from 'lucide-react';

export function SimulatorPage() {
  const navigate = useNavigate();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Ref for category selection section
  const categorySectionRef = useRef(null);
  
  // Get stored profile data
  const storedIncome = localStorage.getItem('monthlyIncome');
  const [income, setIncome] = useState(storedIncome ? storedIncome : '320');
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Parse income as number for calculations
  const incomeNumber = income === '' ? 0 : Number(income);

  const categories = [
    { 
      id: 'rent', 
      label: 'Kirija / Stanovanje', 
      icon: Home, 
      description: 'Stanarina, kredit, porez, osiguranje',
      recommended: 28,
      iconBg: 'linear-gradient(135deg, var(--color-primary-100), var(--color-primary-200))',
      iconColor: 'var(--color-primary-600)',
      glowColor: 'rgba(59, 130, 246, 0.3)'
    },
    { 
      id: 'food', 
      label: 'Hrana', 
      icon: Utensils, 
      description: 'Namirnice, restorani, dostava',
      recommended: 12,
      iconBg: 'linear-gradient(135deg, var(--color-accent-100), var(--color-accent-200))',
      iconColor: 'var(--color-accent-600)',
      glowColor: 'rgba(34, 197, 94, 0.3)'
    },
    { 
      id: 'transport', 
      label: 'Prevoz', 
      icon: Bus, 
      description: 'Autobus, gorivo, održavanje vozila',
      recommended: 12,
      iconBg: 'linear-gradient(135deg, var(--color-secondary-100), var(--color-secondary-200))',
      iconColor: 'var(--color-secondary-600)',
      glowColor: 'rgba(168, 85, 247, 0.3)'
    },
    { 
      id: 'utilities', 
      label: 'Režije', 
      icon: Zap, 
      description: 'Struja, voda, gas, internet, telefon',
      recommended: 8,
      iconBg: 'linear-gradient(135deg, #fef3c7, #fde68a)',
      iconColor: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    },
    { 
      id: 'savings', 
      label: 'Štednja', 
      icon: PiggyBank, 
      description: 'Fond za hitne slučajeve i dugoročna štednja',
      recommended: 15,
      iconBg: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
      iconColor: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.3)'
    },
    { 
      id: 'insurance', 
      label: 'Osiguranje', 
      icon: Shield, 
      description: 'Zdravstveno, životno, auto osiguranje',
      recommended: 10,
      iconBg: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
      iconColor: '#3b82f6',
      glowColor: 'rgba(59, 130, 246, 0.3)'
    },
    { 
      id: 'healthcare', 
      label: 'Zdravlje', 
      icon: Activity, 
      description: 'Lijekovi, pregledi, terapija',
      recommended: 6,
      iconBg: 'linear-gradient(135deg, #fee2e2, #fecaca)',
      iconColor: '#dc2626',
      glowColor: 'rgba(220, 38, 38, 0.3)'
    },
    { 
      id: 'entertainment', 
      label: 'Zabava', 
      icon: Film, 
      description: 'Bioskop, hobiji, pretplate, rekreacija',
      recommended: 5,
      iconBg: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
      iconColor: '#db2777',
      glowColor: 'rgba(219, 39, 119, 0.3)'
    },
    { 
      id: 'clothing', 
      label: 'Odjeća', 
      icon: Shirt, 
      description: 'Garderoba, obuća, dodaci',
      recommended: 4,
      iconBg: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
      iconColor: '#6366f1',
      glowColor: 'rgba(99, 102, 241, 0.3)'
    },
    { 
      id: 'education', 
      label: 'Edukacija', 
      icon: GraduationCap, 
      description: 'Školarinа, knjige, kursevi, krediti',
      recommended: 5,
      iconBg: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)',
      iconColor: '#8b5cf6',
      glowColor: 'rgba(139, 92, 246, 0.3)'
    },
    { 
      id: 'charity', 
      label: 'Dobrotvorno', 
      icon: HandHeart, 
      description: 'Donacije i pomoć drugima',
      recommended: 5,
      iconBg: 'linear-gradient(135deg, #fed7aa, #fdba74)',
      iconColor: '#ea580c',
      glowColor: 'rgba(234, 88, 12, 0.3)'
    },
    { 
      id: 'baby', 
      label: 'Beba / Dijete', 
      icon: Baby, 
      description: 'Pelene, oprema, čuvanje djece',
      recommended: 3,
      iconBg: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
      iconColor: '#ec4899',
      glowColor: 'rgba(236, 72, 153, 0.3)'
    },
    { 
      id: 'emergency', 
      label: 'Hitni fond', 
      icon: AlertTriangle, 
      description: 'Neočekivani troškovi i hitni slučajevi',
      recommended: 5,
      iconBg: 'linear-gradient(135deg, var(--color-warning-100), var(--color-warning-200))',
      iconColor: 'var(--color-warning-600)',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    },
    { 
      id: 'debt', 
      label: 'Dugovi', 
      icon: CreditCard, 
      description: 'Kreditne kartice, pozajmice, dugovanja',
      recommended: 7,
      iconBg: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
      iconColor: '#6b7280',
      glowColor: 'rgba(107, 114, 128, 0.3)'
    },
  ];

  const { distribution, remainder } = useMemo(() => {
    const n = selectedCategories.length;
    if (!n || !incomeNumber || incomeNumber <= 0) {
      return { distribution: [], remainder: incomeNumber || 0 };
    }
    
    // Calculate total recommended percentage
    const totalRecommended = selectedCategories.reduce((sum, catId) => {
      const category = categories.find(c => c.id === catId);
      return sum + (category?.recommended || 0);
    }, 0);
    
    // Distribute based on recommended percentages
    let remainingAmount = incomeNumber;
    const dist = selectedCategories.map((catId, index) => {
      const category = categories.find(c => c.id === catId);
      const percentage = category?.recommended || 0;
      
      // Calculate amount based on percentage
      const amount = index === selectedCategories.length - 1 
        ? remainingAmount // Last category gets remaining to avoid rounding errors
        : Math.round((incomeNumber * percentage) / totalRecommended);
      
      remainingAmount -= amount;
      
      return {
        category: category,
        amount: Math.max(0, amount),
        percentage: percentage
      };
    });
    
    return { distribution: dist, remainder: 0 };
  }, [incomeNumber, selectedCategories]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const resetCategories = () => {
    setSelectedCategories([]);
  };

  const resetSimulator = () => {
    setSelectedCategories(['food', 'rent', 'healthcare']);
  };

  const totalAllocated = distribution.reduce((sum, d) => sum + d.amount, 0);
  const allocationPercentage = incomeNumber > 0 ? (totalAllocated / incomeNumber) * 100 : 0;

  const downloadRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate HTML content for PDF
    const date = new Date().toLocaleDateString('bs-BA');
    let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>FinSim - Budžet Plan</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; padding: 40px; background: white; color: black; }
          .header { text-align: center; margin-bottom: 40px; border-bottom: 3px solid #2563eb; padding-bottom: 20px; }
          .header h1 { font-size: 32px; color: #2563eb; margin-bottom: 10px; }
          .header p { font-size: 16px; color: #666; }
          .summary { background: #f0f9ff; border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin-bottom: 30px; }
          .summary-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 18px; }
          .summary-row strong { color: #1e40af; }
          .category { border: 2px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 15px; page-break-inside: avoid; }
          .category-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
          .category-title { font-size: 20px; font-weight: bold; color: #111827; }
          .category-amount { font-size: 24px; font-weight: bold; color: #2563eb; }
          .category-desc { color: #666; font-size: 14px; margin-bottom: 10px; }
          .category-bar { width: 100%; height: 12px; background: #e5e7eb; border-radius: 6px; overflow: hidden; }
          .category-bar-fill { height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6); border-radius: 6px; transition: width 0.3s; }
          .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>FinSim - Budžet Plan</h1>
          <p>Finansijska simulacija • ${date}</p>
        </div>
        
        <div class="summary">
          <div class="summary-row">
            <span>Mjesečni prihod:</span>
            <strong>${incomeNumber.toFixed(2)} €</strong>
          </div>
          <div class="summary-row">
            <span>Ukupno raspoređeno:</span>
            <strong>${totalAllocated.toFixed(2)} € (${allocationPercentage.toFixed(1)}%)</strong>
          </div>
          <div class="summary-row">
            <span>Broj kategorija:</span>
            <strong>${selectedCategories.length}</strong>
          </div>
        </div>
        
        <h2 style="font-size: 24px; margin-bottom: 20px; color: #111827;">Raspodjela po kategorijama:</h2>
    `;

    distribution.forEach((item) => {
      const percentage = incomeNumber > 0 ? (item.amount / incomeNumber) * 100 : 0;
      htmlContent += `
        <div class="category">
          <div class="category-header">
            <div>
              <div class="category-title">${item.category.label}</div>
              <div class="category-desc">${item.category.description}</div>
            </div>
            <div class="category-amount">${item.amount.toFixed(2)} €</div>
          </div>
          <div style="margin-bottom: 8px; color: #666; font-size: 14px;">${percentage.toFixed(1)}% ukupnog budžeta</div>
          <div class="category-bar">
            <div class="category-bar-fill" style="width: ${percentage}%"></div>
          </div>
        </div>
      `;
    });

    htmlContent += `
        <div class="footer">
          <p><strong>FinSim</strong> - Alat za finansijsku edukaciju</p>
          <p>www.finsim.app</p>
        </div>
      </body>
      </html>
    `;

    // Create Blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `FinSim-Budzet-${date.replace(/\//g, '-')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      {/* Decorative Background Blobs */}
      <div className="decorative-blob blob-primary animate-float" style={{ 
        width: '400px', 
        height: '400px', 
        top: '100px', 
        right: '-120px' 
      }} />
      <div className="decorative-blob blob-accent animate-float" style={{ 
        width: '350px', 
        height: '350px', 
        bottom: '100px', 
        left: '-100px',
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
            Finansijski simulator
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
            Vidi kako možeš rasporediti svoj mjesečni budžet. Izaberi kategorije troškova i provjeri kako najbolje organizovati novac.
          </p>
        </div>

        {/* Video Player Section */}
        <VideoPlayer 
          title="Kako koristiti simulator budžeta" 
          description="Saznaj kako koristiti simulator da napraviš plan za svoje mjesečne troškove i bolje upravljaš finansijama"
        />

        {/* Income Input Card */}
        <div 
          className="finsim-card glass-strong animate-fade-in-up"
          style={{
            marginBottom: 'var(--spacing-8)',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 197, 253, 0.05))',
            borderWidth: '2px',
            borderColor: 'var(--color-primary-300)',
            animationDelay: '0.3s',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Background Element */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, var(--color-primary-200), var(--color-primary-300))',
            borderRadius: '50%',
            opacity: 0.3,
            filter: 'blur(40px)'
          }} />

          {/* Header */}
          <div className="flex items-center gap-4" style={{ marginBottom: 'var(--spacing-6)', position: 'relative', zIndex: 1 }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))',
              borderRadius: 'var(--radius-2xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(37, 99, 235, 0.3)'
            }}>
              <DollarSign className="icon-lg" style={{ color: 'white' }} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.75rem' }}>
                Mjesečni prihod
              </h2>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--color-gray-600)',
                margin: 0
              }}>
                Unesi iznos naknade koju primaš mjesečno
              </p>
            </div>
          </div>

          {/* Income Display & Input */}
          <div style={{ 
            position: 'relative', 
            zIndex: 1,
            marginBottom: 'var(--spacing-6)'
          }}>
            {/* Large Income Display with Input */}
            <label htmlFor="income-input" style={{
              display: 'block',
              textAlign: 'center',
              padding: 'var(--spacing-6)',
              background: 'white',
              borderRadius: 'var(--radius-2xl)',
              border: '2px solid var(--color-primary-200)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              cursor: 'text',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--color-gray-500)',
                fontWeight: 600,
                marginBottom: 'var(--spacing-2)'
              }}>
                Tvoj mjesečni prihod
              </div>
              <div className="flex items-center justify-center gap-2">
                <input
                  id="income-input"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={income}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only digits or empty string
                    if (value === '' || /^\d+$/.test(value)) {
                      setIncome(value);
                    }
                  }}
                  placeholder="0"
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-secondary-600))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    border: 'none',
                    outline: 'none',
                    textAlign: 'center',
                    width: 'auto',
                    maxWidth: '400px',
                    padding: '0',
                    margin: '0'
                  }}
                />
                <span style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--color-gray-400)',
                  alignSelf: 'flex-end',
                  marginBottom: '0.5rem'
                }}>
                  €
                </span>
              </div>
            </label>
          </div>

          {/* Info Banner */}
          <div className="banner banner-info" style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-3)',
            position: 'relative',
            zIndex: 1
          }}>
            <Info className="icon-lg" style={{ 
              color: 'var(--color-primary-600)',
              flexShrink: 0
            }} />
            <p style={{ 
              fontSize: '1rem',
              color: 'var(--color-primary-800)',
              margin: 0,
              lineHeight: 1.7
            }}>
              <strong>Podsjetnik:</strong> Ovo je simulacija. Koristi prosječan iznos naknade koju primaš da dobiješ realnu sliku.
            </p>
          </div>
        </div>

        {/* Category Selection Card */}
        <div 
          ref={categorySectionRef}
          className="finsim-card glass-strong animate-fade-in-up"
          style={{
            marginBottom: 'var(--spacing-8)',
            borderWidth: '2px',
            borderColor: 'var(--color-secondary-200)',
            animationDelay: '0.4s'
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--spacing-4)',
              marginBottom: 'var(--spacing-3)',
              flexWrap: 'wrap'
            }}>
              <div className="flex items-center gap-4">
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'linear-gradient(135deg, var(--color-secondary-500), var(--color-secondary-600))',
                  borderRadius: 'var(--radius-xl)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Target className="icon" style={{ color: 'white' }} />
                </div>
                <div>
                  <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
                    Izaberi kategorije troškova
                  </h2>
                  <p style={{ 
                    fontSize: '1rem',
                    color: 'var(--color-gray-600)',
                    margin: 0
                  }}>
                    Klikni na kategorije koje želiš uključiti u svoj budžet
                  </p>
                </div>
              </div>

              {selectedCategories.length > 0 && (
                <button
                  className="btn btn-outline"
                  onClick={resetCategories}
                  style={{ flexShrink: 0 }}
                >
                  <RotateCcw className="icon" />
                  <span>Očisti sve</span>
                </button>
              )}
            </div>
          </div>

          {/* Categories Grid */}
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--spacing-4)',
              marginBottom: selectedCategories.length === 0 ? 'var(--spacing-6)' : 0
            }}
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategories.includes(category.id);
              
              return (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className="finsim-card-interactive"
                  style={{
                    padding: 'var(--spacing-5)',
                    textAlign: 'left',
                    borderWidth: '2px',
                    borderColor: isSelected ? 'var(--color-secondary-400)' : 'var(--color-gray-200)',
                    background: isSelected 
                      ? 'linear-gradient(135deg, var(--color-secondary-50), var(--color-secondary-100))' 
                      : 'white',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Selected Indicator */}
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      top: 'var(--spacing-3)',
                      right: 'var(--spacing-3)',
                      width: '2rem',
                      height: '2rem',
                      background: 'linear-gradient(135deg, var(--color-secondary-500), var(--color-secondary-600))',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(168, 85, 247, 0.4)'
                    }}>
                      <CheckCircle2 className="icon" style={{ 
                        color: 'white',
                        width: '1.25rem',
                        height: '1.25rem'
                      }} />
                    </div>
                  )}

                  {/* Icon */}
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    background: category.iconBg,
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--spacing-4)',
                    boxShadow: `0 4px 12px ${category.glowColor}`
                  }}>
                    <Icon className="icon-lg" style={{ color: category.iconColor }} />
                  </div>

                  {/* Label */}
                  <div style={{ 
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-2)',
                    color: 'var(--color-gray-900)'
                  }}>
                    {category.label}
                  </div>

                  {/* Description */}
                  <p style={{ 
                    fontSize: '0.875rem',
                    color: 'var(--color-gray-600)',
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Warning Banner */}
          {selectedCategories.length === 0 && (
            <div className="banner banner-warning" style={{ marginTop: 'var(--spacing-6)', alignItems: 'center' }}>
              <AlertCircle className="icon-lg" style={{ 
                color: 'var(--color-warning-600)',
                flexShrink: 0
              }} />
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--color-warning-900)',
                margin: 0,
                lineHeight: 1.7
              }}>
                Molimo izaberi barem jednu kategoriju za raspodjelu budžeta.
              </p>
            </div>
          )}
        </div>

        {/* Distribution Results */}
        {selectedCategories.length > 0 && (
          <div 
            className="finsim-card glass-strong animate-fade-in-up"
            style={{
              marginBottom: 'var(--spacing-8)',
              borderWidth: '2px',
              borderColor: 'var(--color-accent-200)',
              background: 'linear-gradient(135deg, var(--color-accent-50), white)',
              animationDelay: '0.5s'
            }}
          >
            {/* Header with Action Buttons */}
            <div style={{ 
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-6)',
              gap: 'var(--spacing-4)',
              flexWrap: 'wrap'
            }}>
              <div className="flex items-center gap-4">
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'linear-gradient(135deg, var(--color-accent-500), var(--color-accent-600))',
                  borderRadius: 'var(--radius-xl)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUp className="icon" style={{ color: 'white' }} />
                </div>
                <div>
                  <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
                    Raspodjela budžeta
                  </h2>
                  <p style={{ 
                    fontSize: '1rem',
                    color: 'var(--color-gray-600)',
                    margin: 0
                  }}>
                    Tvoj novac raspoređen na {selectedCategories.length} {selectedCategories.length === 1 ? 'kategoriju' : selectedCategories.length < 5 ? 'kategorije' : 'kategorija'}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Overview */}
            <div style={{ 
              padding: 'var(--spacing-5)',
              background: 'white',
              borderRadius: 'var(--radius-xl)',
              border: '2px solid var(--color-accent-200)',
              marginBottom: 'var(--spacing-6)'
            }}>
              <div className="flex justify-between items-center" style={{ marginBottom: 'var(--spacing-3)' }}>
                <span style={{ 
                  fontSize: '1rem',
                  color: 'var(--color-gray-600)',
                  fontWeight: 600
                }}>
                  Ukupno raspoređeno
                </span>
                <span style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--color-accent-600)'
                }}>
                  {totalAllocated.toFixed(2)} € <span style={{ 
                    fontSize: '1rem',
                    color: 'var(--color-gray-500)',
                    fontWeight: 600
                  }}>od {incomeNumber.toFixed(2)} €</span>
                </span>
              </div>
              
              {/* Progress Bar */}
              <div style={{
                width: '100%',
                height: '0.75rem',
                background: 'var(--color-gray-200)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${allocationPercentage}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--color-accent-500), var(--color-accent-600))',
                  borderRadius: 'var(--radius-full)',
                  transition: 'width 0.5s ease'
                }} />
              </div>
            </div>

            {/* Distribution List */}
            <div style={{ 
              display: 'grid',
              gap: 'var(--spacing-4)',
              marginBottom: 'var(--spacing-6)'
            }}>
              {distribution.map((item, index) => {
                const Icon = item.category.icon;
                const percentage = incomeNumber > 0 ? (item.amount / incomeNumber) * 100 : 0;
                
                return (
                  <div
                    key={item.category.id}
                    className="finsim-card animate-fade-in-up"
                    style={{
                      padding: 'var(--spacing-5)',
                      borderWidth: '2px',
                      animationDelay: `${0.1 * index}s`
                    }}
                  >
                    <div className="flex items-center justify-between" style={{ 
                      marginBottom: 'var(--spacing-4)',
                      gap: 'var(--spacing-4)',
                      flexWrap: 'wrap'
                    }}>
                      {/* Category Info */}
                      <div className="flex items-center gap-3" style={{ flex: 1, minWidth: '200px' }}>
                        <div style={{
                          width: '3rem',
                          height: '3rem',
                          background: item.category.iconBg,
                          borderRadius: 'var(--radius-lg)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: `0 2px 8px ${item.category.glowColor}`
                        }}>
                          <Icon className="icon" style={{ color: item.category.iconColor }} />
                        </div>
                        <div>
                          <div style={{ 
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            marginBottom: '0.25rem',
                            color: 'var(--color-gray-900)'
                          }}>
                            {item.category.label}
                          </div>
                          <div style={{ 
                            fontSize: '0.875rem',
                            color: 'var(--color-gray-600)'
                          }}>
                            {item.category.description}
                          </div>
                        </div>
                      </div>

                      {/* Amount */}
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ 
                          fontSize: '1.75rem',
                          fontWeight: 800,
                          color: 'var(--color-gray-900)',
                          lineHeight: 1
                        }}>
                          {item.amount.toFixed(2)} €
                        </div>
                        <div style={{ 
                          fontSize: '0.875rem',
                          color: 'var(--color-gray-500)',
                          marginTop: '0.25rem',
                          fontWeight: 600
                        }}>
                          {percentage.toFixed(1)}% budžeta
                        </div>
                      </div>
                    </div>

                    {/* Category Progress Bar */}
                    <div style={{
                      width: '100%',
                      height: '0.5rem',
                      background: 'var(--color-gray-200)',
                      borderRadius: 'var(--radius-full)',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${percentage}%`,
                        height: '100%',
                        background: item.category.iconBg,
                        borderRadius: 'var(--radius-full)',
                        transition: 'width 0.5s ease'
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary Banner */}
            <div className="banner banner-success">
              <CheckCircle2 className="icon-lg" style={{ 
                color: 'var(--color-accent-600)',
                flexShrink: 0
              }} />
              <div>
                <div style={{ 
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-accent-900)',
                  marginBottom: '0.25rem'
                }}>
                  Savjet za planiranje
                </div>
                <p style={{ 
                  fontSize: '1rem',
                  color: 'var(--color-accent-800)',
                  margin: 0,
                  lineHeight: 1.7
                }}>
                  {allocationPercentage === 100 
                    ? 'Sve sredstva su raspoređena. Dobra je praksa da ostaviš mali dio kao rezervu za neočekivane troškove.'
                    : `Imaš još ${remainder.toFixed(2)} € koji možeš čuvati kao rezervu ili rasporediti na dodatne potrebe.`}
                </p>
              </div>
            </div>

            {/* MOVED: Download Button - NOW UNDER TABLE - REDESIGNED */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--spacing-6)',
              marginTop: 'var(--spacing-10)',
              flexWrap: 'wrap'
            }}>
              <button
                className="btn-download-budget animate-fade-in-up"
                onClick={handleDownload}
                style={{ 
                  animationDelay: '0.7s',
                  background: 'linear-gradient(135deg, #2563eb 0%, #7e22ce 100%)',
                  color: 'white',
                  padding: 'var(--spacing-8) var(--spacing-16)',
                  borderRadius: 'var(--radius-2xl)',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  border: 'none',
                  boxShadow: '0 12px 40px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-4)',
                  position: 'relative',
                  overflow: 'hidden',
                  minWidth: '300px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(37, 99, 235, 0.5), 0 0 80px rgba(126, 34, 206, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3) inset';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset';
                }}
              >
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}>
                  <Download style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                </div>
                <span style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}>Preuzmi budžet</span>
                <Sparkles style={{ 
                  width: '1.75rem', 
                  height: '1.75rem', 
                  color: 'white',
                  animation: 'pulse 2s ease-in-out infinite'
                }} />
              </button>

              <button
                className="btn-scroll-top animate-fade-in-up"
                onClick={() => {
                  if (categorySectionRef.current) {
                    categorySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                style={{ 
                  animationDelay: '0.75s',
                  background: 'linear-gradient(135deg, #10b981 0%, #22c55e 100%)',
                  color: 'white',
                  padding: 'var(--spacing-6) var(--spacing-10)',
                  borderRadius: 'var(--radius-2xl)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  border: 'none',
                  boxShadow: '0 12px 40px rgba(16, 185, 129, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-3)',
                  position: 'relative',
                  overflow: 'hidden',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(16, 185, 129, 0.5), 0 0 80px rgba(34, 197, 94, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3) inset';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(16, 185, 129, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset';
                }}
              >
                <ArrowUp style={{ 
                  width: '1.5rem', 
                  height: '1.5rem', 
                  color: 'white'
                }} />
                <span style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}>Povratak na vrh</span>
              </button>
            </div>
          </div>
        )}

        {/* Tips Card */}
        <div 
          className="finsim-card glass-strong animate-fade-in-up"
          style={{
            marginBottom: 'var(--spacing-12)',
            background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-secondary-600))',
            borderWidth: '2px',
            borderColor: 'var(--color-primary-500)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            animationDelay: '0.6s'
          }}
        >
          {/* Decorative Sparkles */}
          <div style={{
            position: 'absolute',
            top: 'var(--spacing-6)',
            right: 'var(--spacing-6)',
            opacity: 0.1
          }}>
            <Sparkles style={{ width: '8rem', height: '8rem' }} />
          </div>

          {/* Header */}
          <div className="flex items-center gap-3" style={{ 
            marginBottom: 'var(--spacing-6)',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <Lightbulb className="icon" style={{ color: 'white' }} />
            </div>
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'white' }}>
              Savjeti za upravljanje budžetom
            </h2>
          </div>

          {/* Tips List */}
          <ul style={{ 
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: 'var(--spacing-4)',
            position: 'relative',
            zIndex: 1
          }}>
            {[
              'Uvijek prvo plati obavezne troškove (kirija, računi, hrana)',
              'Pokušaj da ostaviš barem 10% kao rezervu za neočekivane situacije',
              'Prati svoje troškove redovno i prilagodi budžet po potrebi',
              'Koristi bankomat samo kada je zaista potrebno da izbjegneš dodatne troškove'
            ].map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3" style={{ 
                fontSize: '1.125rem',
                lineHeight: 1.7
              }}>
                <span style={{
                  display: 'inline-flex',
                  width: '1.5rem',
                  height: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '0.25rem',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}>
                  {idx + 1}
                </span>
                <span style={{ flex: 1 }}>{tip}</span>
              </li>
            ))}
          </ul>
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
              navigate('/koraci');
            }}
          >
            <ChevronLeft className="icon" style={{ width: '1.5rem', height: '1.5rem' }} />
            <span>Natrag</span>
          </button>

          <button 
            className="btn btn-primary btn-lg"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/');
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Završi</span>
            <CheckCircle2 className="icon" style={{ 
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