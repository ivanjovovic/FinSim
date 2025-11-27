# 🚀 FinSim - Brzi Start

## ⚡ Za nestrpljive (Quick Start)

```bash
# 1. Instaliraj dependencies
npm install

# 2. Pokreni aplikaciju
npm run dev

# 3. Otvori browser na:
http://localhost:5173
```

**TO JE TO!** ✅

---

## 📁 Struktura Projekta

```
finsim-redizajn/
├── src/
│   ├── components/         # React komponente
│   │   ├── Layout.tsx              # Glavni layout sa navigacijom
│   │   ├── ProtectedRoute.tsx      # Zaštita ruta (profil requirement)
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   │
│   ├── pages/              # Stranice aplikacije
│   │   ├── LandingPage.jsx         # Početna stranica (/)
│   │   ├── StepsPage.jsx           # Koraci za otvaranje računa (/koraci)
│   │   ├── ProfilePage.jsx         # Izbor profila (/profil)
│   │   ├── RightsPage.jsx          # Prava na račun (/prava)
│   │   ├── SimulatorPage.jsx       # Simulator troškova (/simulator)
│   │   └── video-racun.mp4         # 🎥 STAVI VIDEO OVDJE!
│   │
│   ├── data/               # Podaci
│   │   └── profiles.ts             # Profili korisnika
│   │
│   ├── styles/             # Stilovi
│   │   └── globals.css             # Glavni CSS fajl (sve klase ovdje)
│   │
│   ├── App.tsx             # Glavni App component (rutiranje)
│   └── main.tsx            # Entry point
│
├── public/                 # Statički fajlovi
├── index.html              # HTML template
├── package.json            # Dependencies i skripte
├── vite.config.ts          # Vite konfiguracija
└── tsconfig.json           # TypeScript konfiguracija
```

---

## 🎥 Dodavanje Videa

### Korak 1: Kopiraj video fajl
```
Preimenuj video u: video-racun.mp4
Stavi ga u:       src/pages/video-racun.mp4
```

### Korak 2: Nema koraka 2! 
Video je već povezan u `StepsPage.jsx` 👍

---

## 🧭 Rute u Aplikaciji

| Ruta        | Stranica          | Zaštićena | Opis                              |
|-------------|-------------------|-----------|-----------------------------------|
| `/`         | LandingPage       | ❌        | Početna stranica                  |
| `/koraci`   | StepsPage         | ❌        | Koraci za otvaranje računa + video|
| `/profil`   | ProfilePage       | ❌        | Izbor kategorije korisnika        |
| `/prava`    | RightsPage        | ✅        | Prava na osnovni platni račun     |
| `/simulator`| SimulatorPage     | ✅        | Simulator troškova (14 kategorija)|

**Zaštićene rute:** Zahtijevaju da korisnik prvo odabere kategoriju na `/profil` stranici!

---

## 📱 Navigacioni Flow

```
🏠 Početna → 📋 Koraci → 👤 Profil → ⚖️ Prava → 💰 Simulator
   (/)        (/koraci)   (/profil)   (/prava)   (/simulator)
```

**VAŽNO:** 
- Korisnik mora prvo odabrati kategoriju na **Profil** stranici
- Tek onda može pristupiti **Prava** i **Simulator** stranicama
- Ako pokuša pristupiti bez kategorije → redirect na **Profil**

---

## 🎨 Dizajn Sistema

### Boje (CSS Custom Properties)
```css
--color-primary-*     /* Plava (primarni akcenti) */
--color-secondary-*   /* Ljubičasta (sekundarni) */
--color-accent-*      /* Zelena (uspjeh, CTA) */
--color-warning-*     /* Narandžasta (upozorenja) */
--color-error-*       /* Crvena (greške) */
--color-gray-*        /* Siva (tekst, pozadine) */
```

### Glassmorphism Klase
```css
.glass              /* Blago staklo */
.glass-strong       /* Jako staklo */
.glass-card         /* Staklo sa border */
```

### Animacije
```css
.animate-fade-in         /* Fade in */
.animate-fade-in-up      /* Fade + slide up */
.animate-fade-in-down    /* Fade + slide down */
.animate-scale-in        /* Scale + fade */
.animate-slide-in-left   /* Slide from left */
.animate-float           /* Float effect */
```

### Komponente
```css
.btn                 /* Osnovno dugme */
.btn-primary         /* Primarno dugme */
.btn-outline         /* Outline dugme */
.finsim-card         /* Premium card */
.banner              /* Info banner */
.hero-badge          /* Badge sa ikonom */
```

**SVE KLASE SU U:** `/src/styles/globals.css`

---

## 🔧 Komande

```bash
# Development
npm run dev          # Pokreni dev server (localhost:5173)
npm run dev -- --host # Pokreni + omogući pristup sa drugih uređaja

# Production
npm run build        # Kreiraj production build
npm run preview      # Preview production build

# Utilities
npm install          # Instaliraj dependencies
npm cache clean --force  # Očisti npm cache
```

---

## 📦 Dependencies

### Production
- **react** - UI library
- **react-dom** - React rendering
- **react-router-dom** - Rutiranje
- **lucide-react** - Ikone
- **html2canvas** - Export slika (podsjetnik na Steps stranici)
- **recharts** - Charts (grafikon na Simulator stranici)

### Development
- **vite** - Build tool (brz bundler)
- **typescript** - Type safety
- **@vitejs/plugin-react** - React plugin za Vite

---

## 🌐 Testiranje na Mobilnom

### 1. Pokreni sa host opcijom:
```bash
npm run dev -- --host
```

### 2. Pronađi IP adresu:
**Windows:**
```bash
ipconfig
# Traži: IPv4 Address
```

**Mac/Linux:**
```bash
ifconfig
# Traži: inet
```

### 3. Na telefonu otvori:
```
http://192.168.1.XXX:5173
```
*(zamijeni XXX sa svojim IP brojem)*

---

## ⚠️ Česti Problemi

### Problem: Port zauzet
```bash
# Pokreni na drugom portu
npm run dev -- --port 3000
```

### Problem: Video se ne učitava
1. Provjeri da je video na: `src/pages/video-racun.mp4`
2. Hard refresh: `Ctrl + Shift + R`
3. Provjeri browser console (`F12`)

### Problem: Stil ne radi
1. Provjeri da postoji: `src/styles/globals.css`
2. Provjeri da je importovan u `main.tsx`
3. Clear browser cache

### Problem: TypeScript greške
```bash
# Ignoriši TS greške (privremeno)
npm run build -- --no-types
```

---

## 🏗️ Production Build

```bash
# 1. Build projekat
npm run build

# 2. Build će biti u "dist/" folderu
# 3. Deploy "dist/" folder na hosting (Vercel, Netlify, itd.)
```

---

## 📞 Dodatna Pomoć

Detaljne instrukcije: **LOKALNO_POKRETANJE.md**

---

✨ **Uživaj u redizajniranom FinSim-u!** 🚀
