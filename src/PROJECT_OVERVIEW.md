# FinSim - Project Overview

## 📋 Pregled projekta

FinSim je moderna, redizajnirana verzija edukativne web aplikacije za finansijsku pismenost. Aplikacija je namenjena korisnicima socijalnih naknada, invalidnina i sličnih primanja u Crnoj Gori i regionu.

## 🎯 Svrha

Pomoći korisnicima da:
1. **Razumiju** svoja prava na osnovni platni račun
2. **Nauče** korake za otvaranje računa u banci
3. **Simuliraju** raspodelu mesečnog budžeta
4. **Planiraju** troškove na siguran i edukovan način

## 🏗️ Arhitektura

### Tech Stack

```
React 18.x + TypeScript
├── React Router DOM v6    # Routing
├── Tailwind CSS v4        # Styling
├── Motion/React           # Animacije
├── Shadcn/ui             # UI komponente
├── Lucide React          # Ikone
└── html2canvas           # Export funkcionalnost
```

### Folder Structure

```
/
├── components/          # React komponente
│   ├── ui/             # Shadcn/ui komponente (reusable)
│   ├── Layout.tsx      # Glavni layout wrapper
│   └── figma/          # Figma specifične komponente
│
├── pages/              # Route stranice
│   ├── LandingPage.tsx    # Početna stranica
│   ├── ProfilePage.tsx    # Izbor profila
│   ├── RightsPage.tsx     # Prava korisnika
│   ├── StepsPage.tsx      # Koraci u banci
│   └── SimulatorPage.tsx  # Budžet simulator
│
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.ts
│   └── useMediaQuery.ts
│
├── utils/              # Utility funkcije
│   ├── constants.ts
│   └── helpers.ts
│
├── data/               # Statički podaci
│   └── profiles.ts
│
├── types/              # TypeScript definicije
│   └── index.ts
│
├── styles/             # Stilovi
│   └── globals.css
│
└── App.tsx            # Root komponenta
```

## 📱 Stranice i Flow

### 1. Landing Page (`/`)
**Svrha**: Uvod u aplikaciju i motivacija korisnika

**Komponente**:
- Hero sekcija sa CTA dugmadima
- 3 glavne funkcionalnosti (cards)
- Timeline prikaz mjesečnog toka
- Warning banner za bezbjednost

**Navigacija**: 
- → `/koraci` (Započni odmah)
- → `/prava` (Vidi prava prvo)

---

### 2. Profile Page (`/profil`)
**Svrha**: Izbor korisničkog profila i unos iznosa naknade

**Profili**:
1. Korisnik minimalne zarade (€600)
2. Korisnik materijalnog obezbjeđenja (€320)
3. Korisnik lične invalidnine (€320)
4. Korisnik dodatka za njegu i pomoć (€320)
5. Korisnik naknade za nezaposlene (€320)

**Funkcionalnost**:
- Vizualni izbor profila (click-to-select cards)
- Custom input za prilagođavanje iznosa
- Čuvanje u localStorage
- Validacija unosa

**Navigacija**: → `/prava`

---

### 3. Rights Page (`/prava`)
**Svrha**: Edukacija o pravima na osnovni platni račun

**Sekcije**:
- **Tab 1**: Šta banka SMIJE (5 prava)
- **Tab 2**: Šta banka NE SMIJE (5 ograničenja)

**UI Elementi**:
- Tabs za lakšu navigaciju
- Cards sa ikonama (✓ ili ✗)
- Info tooltipovi sa detaljima
- Alert sa važnim napomenama

**Navigacija**: 
- ← `/profil` (Nazad)
- → `/koraci` (Dalje)

---

### 4. Steps Page (`/koraci`)
**Svrha**: Vodič za otvaranje računa u banci

**4 Koraka**:
1. **Pripremi dokumente** (FileText icon)
   - Lična karta/pasoš
   - Rješenje o naknadi
   - Dokaz o adresi
   - JMBG

2. **Idi u banku** (CreditCard icon)
   - Zatraži osnovni platni račun
   - Pitaj o troškovima
   - Ne potpisuj bez razumijevanja

3. **Potpiši ugovor** (UserCheck icon)
   - Pročitaj sve
   - Zatraži kopiju
   - Zapiši PIN

4. **Dostavi broj računa** (CheckCircle icon)
   - Idi u instituciju
   - Dostavi IBAN
   - Čuvaj potvrde

**Export Funkcionalnost**:
- Preview podsjetnika
- Export as PNG (html2canvas)
- Print opcija
- Share opcija

**Navigacija**: 
- ← `/prava` (Nazad)
- → `/simulator` (Probaj simulator)

---

### 5. Simulator Page (`/simulator`)
**Svrha**: Interaktivna simulacija budžeta

**Funkcionalnosti**:

1. **Income Input**
   - Number input sa +/- dugmadima
   - Minimum: 0 €
   - Step: 10 €
   - Čita iz localStorage ako postoji

2. **Category Selection**
   - 6 kategorija:
     * 🍲 Hrana
     * 💊 Lijekovi
     * 🏠 Kirija
     * 🚌 Prevoz
     * 🤝 Pomoć
     * 🍼 Higijena
   - Multi-select (toggle on/off)
   - Visual feedback (selected state)

3. **Distribution Display**
   - Automatic calculation
   - Equal split sa remainder na prvu kategoriju
   - Progress bar
   - Per-category breakdown
   - Percentage display

4. **Insights & Tips**
   - Savjeti za planiranje
   - Alert za ostatak sredstava
   - Tips card sa best practices

**Kalkulacije**:
```typescript
baseAmount = floor(income / numberOfCategories)
remainder = income - (baseAmount * numberOfCategories)
firstCategoryAmount = baseAmount + remainder
```

**Navigacija**: 
- ← `/koraci` (Nazad)
- → `/` (Završi)

---

## 🎨 Dizajn Sistem

### Boje

```css
Primary:     #3b82f6 (Blue 600)
Secondary:   #8b5cf6 (Purple 600)
Success:     #10b981 (Green 600)
Warning:     #f59e0b (Amber 600)
Danger:      #ef4444 (Red 600)
```

### Gradienti

```css
Primary CTA:   from-blue-600 to-purple-600
Success:       from-green-500 to-emerald-500
Warning:       from-orange-500 to-amber-500
Info:          from-blue-500 to-cyan-500
```

### Spacing

```css
xs:   0.5rem (8px)
sm:   0.75rem (12px)
md:   1rem (16px)
lg:   1.5rem (24px)
xl:   2rem (32px)
2xl:  3rem (48px)
```

### Typography

```css
h1: 2.5rem / 800 weight / -0.02em tracking
h2: 2rem / 700 weight / -0.01em tracking
h3: 1.5rem / 600 weight
h4: 1.25rem / 600 weight
h5: 1.125rem / 600 weight
p:  1rem / 400 weight / 1.7 line-height
```

### Border Radius

```css
sm:  0.375rem (6px)
md:  0.5rem (8px)
lg:  0.75rem (12px)
xl:  1rem (16px)
```

### Shadows

```css
sm: 0 1px 2px rgba(0,0,0,0.05)
md: 0 4px 6px rgba(0,0,0,0.1)
lg: 0 10px 15px rgba(0,0,0,0.1)
xl: 0 20px 25px rgba(0,0,0,0.1)
```

## 🔧 Key Features

### 1. Responzivnost
- **Mobile**: < 768px
  - Bottom navigation bar
  - Stack layouts
  - Single column grids
  - Touch-friendly (44x44px minimum)

- **Tablet**: 768px - 1023px
  - 2-column grids
  - Adapted spacing

- **Desktop**: ≥ 1024px
  - Top navigation bar
  - 3-column grids
  - Hover effects

### 2. Animacije

**Motion/React**:
```typescript
// Fade in
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}

// Stagger children
variants={containerVariants}
staggerChildren: 0.1

// Scale on hover
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### 3. Pristupačnost

- ✅ Semantički HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Alt texts
- ✅ High contrast
- ✅ Large touch targets

### 4. LocalStorage

**Stored Data**:
```typescript
{
  selectedProfile: ProfileId,
  monthlyIncome: number,
  selectedCategories: string[]
}
```

**Keys**:
- `selectedProfile`
- `monthlyIncome`
- `selectedCategories`

### 5. Export Funkcionalnost

**html2canvas opcije**:
```typescript
{
  backgroundColor: '#ffffff',
  scale: 2,
  logging: false,
  useCORS: true
}
```

## 🔒 Sigurnost i Privacy

### Šta NE prikupljamo:
- ❌ Prave bankovne podatke
- ❌ Lične podatke (ime, JMBG, adresa)
- ❌ Finansijske informacije
- ❌ Cookies za tracking

### Šta koristimo:
- ✅ localStorage (samo lokalno)
- ✅ Session data (nestaje pri zatvaranju)
- ✅ Simulacioni podaci

## 📊 Performanse

### Optimizacije:
- Lazy loading slika
- useMemo za kalkulacije
- useCallback za event handlere
- Conditional rendering
- CSS animations (GPU accelerated)
- Code splitting (React.lazy)

### Metrics:
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Bundle Size**: < 500KB
- **Lighthouse Score**: > 90

## 🧪 Testing Checklist

### Functionality:
- [ ] Routing funkcioniše
- [ ] Form validacija radi
- [ ] localStorage persist radi
- [ ] Export PNG funkcija radi
- [ ] Kalkulacije su tačne

### Browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari
- [ ] Chrome Mobile

### Devices:
- [ ] iPhone (iOS 15+)
- [ ] Android phone
- [ ] iPad/Tablet
- [ ] Desktop (1920x1080)
- [ ] 4K display

### Accessibility:
- [ ] Keyboard navigation
- [ ] Screen reader compatible
- [ ] Color contrast (WCAG AA)
- [ ] Focus indicators
- [ ] ARIA labels

## 🚀 Deployment

### Build Process:
```bash
npm install
npm run build
```

### Environment:
- No environment variables needed
- Pure frontend app
- Can be hosted on any static hosting:
  - Vercel
  - Netlify
  - GitHub Pages
  - Cloudflare Pages

## 📈 Future Enhancements

### V2.1 (Short-term):
- [ ] Dark mode
- [ ] Multi-language (EN, DE)
- [ ] PDF export
- [ ] Advanced simulator
- [ ] Tutorial overlay

### V2.2 (Long-term):
- [ ] PWA support
- [ ] Offline mode
- [ ] Push notifications
- [ ] Social sharing
- [ ] Analytics
- [ ] User feedback system

## 🤝 Contributing

Vidi [CONTRIBUTING.md](./CONTRIBUTING.md) za detalje.

## 📝 License

Educational project for financial literacy.

---

**Last Updated**: November 23, 2024
**Version**: 2.0.0
**Author**: Redesigned by AI Assistant
**Original**: hakaton project by ivanjovovic
