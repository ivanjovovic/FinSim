# FinSim - Vodič za finansijsku pismenost 💰

> Edukativna finansijska simulaciona aplikacija prilagođena starijim osobama i korisnicima sa posebnim potrebama

---

## 📖 O projektu

**FinSim** je ultra-moderna finansijska simulaciona aplikacija dizajnirana da pomogne starijim osobama i korisnicima sa posebnim potrebama da razumiju:
- 👤 Svoje profile (primalac invalidnine, dječijeg dodatka, stariji korisnik)
- 🛡️ Svoja prava nad platnim računom
- 💵 Kako najbolje upravljati mjesečnim primanjima

---

## ✨ Karakteristike

### 🎨 Ultra-napredan dizajn
- **Glassmorphism** efekti i moderne animacije
- **Gradient** pozadine sa float animacijama
- **Premium** tipografija optimizovana za čitljivost
- **Smooth** prelazi i hover efekti
- **Dekorativni** elementi i blobs

### ♿ Accessibility-first
- 📏 **Veliki fontovi** (18px+ body tekst)
- 🎯 **Visok kontrast** (WCAG 2.1 AA)
- ⌨️ **Keyboard navigation**
- 🔊 **Screen reader** podrška
- 👁️ **Focus indicators** (4px outline)
- 🎬 **Reduced motion** support

### 🎭 Premium animacije
- Fade in/out efekti
- Slide animacije
- Scale i rotate transformacije
- Float efekti na dekorativnim elementima
- Gradient shift animacije
- Shimmer efekti na karticama

### 📱 Responsive
- Mobile-first dizajn
- Testiran od 360px pa naviše
- Prilagođava se svim ekranima

---

## 🚀 Početak

```bash
# Kloniraj repozitorij
git clone https://github.com/your-username/finsim.git
cd finsim

# Instaliraj zavisnosti
npm install

# Pokreni development server
npm run dev
```

Aplikacija će biti dostupna na `http://localhost:5173`

---

## 📁 Struktura projekta

```
finsim/
├── components/
│   ├── ui/              # Shadcn komponente
│   └── Layout.jsx       # Main layout
├── pages/
│   ├── LandingPage.jsx  # 🆕 Ultra-napredna početna stranica
│   ├── ProfilePage.tsx
│   ├── RightsPage.tsx
│   ├── StepsPage.tsx
│   └── SimulatorPage.tsx
├── styles/
│   └── globals.css      # 🎨 SVE stilove ovdje!
└── App.tsx
```

---

## 🎨 Design System

Svi stilovi se nalaze u **`/styles/globals.css`** fajlu!

### Color Palette

```css
/* Primary - Financial Blue */
--color-primary-500: #3b82f6

/* Secondary - Premium Purple */
--color-secondary-500: #a855f7

/* Accent - Success Green */
--color-accent-500: #22c55e

/* Warning */
--color-warning-500: #f59e0b

/* Danger */
--color-danger-500: #ef4444
```

### Spacing System (8px grid)

```css
--spacing-4: 1rem      /* 16px */
--spacing-6: 1.5rem    /* 24px */
--spacing-8: 2rem      /* 32px */
--spacing-12: 3rem     /* 48px */
```

### Готове CSS klase

```css
/* Cards */
.finsim-card          /* Osnovna kartica */
.feature-card         /* Feature kartica sa animacijama */

/* Buttons */
.btn                  /* Osnovni button */
.btn-primary          /* Gradient button */
.btn-secondary        /* White button */
.btn-outline          /* Outline button */
.btn-lg               /* Large button */

/* Banners */
.banner               /* Osnovan banner */
.banner-warning       /* Warning banner */
.banner-info          /* Info banner */
.banner-success       /* Success banner */

/* Effects */
.glass                /* Glassmorphism */
.gradient-text        /* Gradient tekst */
.animate-fade-in-up   /* Fade animacija */
.animate-float        /* Float animacija */
```

---

## 🎯 Landing Page - Lista elemenata

### 1. **Decorative Blobs**
- Floating animated background elements
- Primary i secondary boje
- Pozicionirani za vizuelni interes

### 2. **Warning Banner**
- Žuti warning banner na vrhu
- Ikona + naslov + tekst
- Animiran fadeInDown

### 3. **Info Banner**
- Glassmorphism efekat
- Gradient pozadina
- Animated sparkles ikona

### 4. **Hero Section**
- **Badge** - "Finansijska pismenost za sve"
- **Title** - "FinSim" sa gradient animacijom
- **Subtitle** - Glavni tagline
- **Description** - Detaljan opis
- **Dual CTA buttons** - Primary i Secondary

### 5. **Feature Cards Grid** (3 kartice)
- **Profil** - Plava kartica
- **Prava** - Ljubičasta kartica
- **Simulator** - Zelena kartica

Svaka kartica ima:
- Animated gradient ikonu
- Naslov
- Kratak opis
- Detaljan tekst
- Arrow link
- Hover efekte (scale, rotate, shimmer)
- Keyboard accessible

### 6. **Why Use FinSim Section**
- Card sa listom 6 benefita
- CheckCircle ikone
- Grid layout (2x3)

### 7. **Bottom CTA Section**
- Glassmorphism card
- Dual CTA buttons
- Poziv na akciju

### 8. **Footer Info**
- 3 key points sa ikonama
- Separator dots

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS 4.0** - Utility classes
- **Lucide React** - Premium ikone
- **Pure CSS** - Sve animacije i efekti

---

## 📱 Stranice

1. **Landing** ✅ - Ultra-napredna početna
2. **Profile** - Izbor profila korisnika
3. **Rights** - Prava na račun
4. **Steps** - Koraci u banci
5. **Simulator** - Simulator troškova

---

## 🎭 Premium Features

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(10px);
```

### Gradient Animations
```css
background-size: 200% 200%;
animation: gradientShift 5s ease infinite;
```

### Float Animations
```css
animation: float 3s ease-in-out infinite;
```

### Shimmer Effect
```css
animation: shimmer 2s linear infinite;
```

---

## ♿ WCAG Compliance

- ✅ **AA Compliant** - 7:1 contrast ratio
- ✅ **Keyboard navigation** - Tab, Enter, Space
- ✅ **ARIA labels** - Sve interaktivne elemente
- ✅ **Focus indicators** - Vidljivi na svim elementima
- ✅ **Semantic HTML** - Pravilna struktura
- ✅ **Reduced motion** - Automatski disable za korisnik preference

---

## 📝 License

MIT License - vidi [LICENSE](LICENSE) fajl

---

## 👥 Tim

Original projekat: [ivanjovovic/hakaton](https://github.com/ivanjovovic/hakaton)

**Made with ❤️ for accessibility and financial literacy**

---

## 🙏 Credits

- **Lucide** - Za moderne ikone
- **Tailwind CSS** - Za utility framework
- **Shadcn/ui** - Za UI komponente

---

**FinSim v2.0 - Ultra-Premium Financial Education Platform**
