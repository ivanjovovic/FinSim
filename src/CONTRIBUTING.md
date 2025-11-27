# Contributing to FinSim

Hvala što razmišljaš o doprinosu FinSim projektu! 🎉

## Kako doprinijeti

### Prijavljivanje problema (Issues)

Ako pronađeš bug ili imaš ideju za poboljšanje:

1. Provjeri da li problem već postoji u Issues
2. Ako ne postoji, kreiraj novi Issue sa jasnim opisom:
   - Naziv problema
   - Detaljan opis
   - Koraci za reprodukciju (ako je bug)
   - Očekivano ponašanje
   - Screenshot-ovi (ako je vizuelni problem)
   - Browser i OS informacije

### Predlaganje promjena (Pull Requests)

1. **Fork** projekat
2. **Kreiraj** novi branch (`git checkout -b feature/amazing-feature`)
3. **Commit-uj** promjene (`git commit -m 'Add amazing feature'`)
4. **Push** na branch (`git push origin feature/amazing-feature`)
5. **Otvori** Pull Request

### Coding standardi

#### React Komponente
```tsx
// Koristi function komponente sa TypeScript
export function MyComponent({ prop1, prop2 }: MyComponentProps) {
  return (
    <div className="class-name">
      {/* Content */}
    </div>
  );
}
```

#### Tailwind CSS
- Koristi utility klase umjesto custom CSS-a gdje god je moguće
- Grupiši srodne klase zajedno
- Koristi responsive prefixe gdje je potrebno (`sm:`, `md:`, `lg:`)

```tsx
<div className="flex items-center gap-4 p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
  {/* Content */}
</div>
```

#### Animacije
- Koristi Motion/Framer Motion za animacije
- Drži animacije smooth i ne previše duge (max 500ms)
- Koristi `ease-out` ili `ease-in-out` easing

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### Pristupačnost (a11y)

Uvijek vodi računa o pristupačnosti:

- ✅ Koristi semantički HTML
- ✅ Dodaj ARIA labele gdje je potrebno
- ✅ Testiraj keyboard navigaciju
- ✅ Obezbjedi dobar color contrast
- ✅ Dodaj alt tekstove na slike
- ✅ Koristi focus indikatore

### Testing

Prije slanja PR-a:

1. Testiraj na različitim browser-ima (Chrome, Firefox, Safari, Edge)
2. Testiraj na mobilnim uređajima
3. Provjeri pristupačnost (screen reader test)
4. Testiraj keyboard navigaciju
5. Provjeri da nema console errors-a

### Commit Messages

Koristi jasne i opisne commit poruke:

```
feat: Add dark mode support
fix: Resolve mobile navigation overlap
docs: Update README with new features
style: Improve button hover effects
refactor: Optimize simulator calculations
```

Prefixes:
- `feat`: Nova funkcionalnost
- `fix`: Bug fix
- `docs`: Dokumentacija
- `style`: CSS/Styling promjene
- `refactor`: Code refactoring
- `perf`: Performance poboljšanja
- `test`: Dodavanje testova
- `chore`: Maintenance zadaci

### Šta tražimo

#### Prioritet doprinos:
- 🎨 Dizajn poboljšanja (posebno za pristupačnost)
- ♿ Accessibility poboljšanja
- 🐛 Bug fixes
- 📝 Dokumentacija
- 🌍 Prevodi/Translations
- 📱 Mobile optimizacije

#### Dobrodošli su:
- Novi features (uz diskusiju prvo)
- Performance optimizacije
- Code quality poboljšanja
- Unit testovi
- E2E testovi

### Code Review Process

1. Maintainer će pregledati tvoj PR
2. Mogu biti zatražene izmjene
3. Nakon odobrenja, PR će biti merged
4. Tvoje ime će biti dodato u Contributors! 🎉

### Pitanja?

Ako imaš bilo kakva pitanja:
- Otvori Discussion na GitHub-u
- Pošalji email (ako je dostupan)
- Pitaj u Issues sekciji

## Code of Conduct

### Naša obaveza

Mi smo posvećeni pružanju prijateljskog, sigurnog i dobrodošlog okruženja za sve, bez obzira na:
- Nivo iskustva
- Identitet i izraz
- Seksualnu orijentaciju
- Invaliditet
- Lični izgled
- Rasu
- Vjeru

### Naši standardi

Primjeri ponašanja koje doprinose pozitivnom okruženju:
- ✅ Korišćenje dobrodošlog i inkluzivnog jezika
- ✅ Poštovanje različitih stavova i iskustava
- ✅ Pristojno prihvatanje konstruktivne kritike
- ✅ Fokus na ono što je najbolje za zajednicu
- ✅ Pokazivanje empatije prema drugim članovima

Primjeri neprihvatljivog ponašanja:
- ❌ Korišćenje seksualizovanog jezika ili slika
- ❌ Trolling, uvredljivi komentari
- ❌ Lični ili politički napadi
- ❌ Javno ili privatno uznemiravanje
- ❌ Objavljivanje tuđih privatnih informacija

## Licenca

Doprinosom ovom projektu, slažeš se da će tvoj doprinos biti licenciran pod istom licencom kao i projekat.

---

Hvala što pomaže da FinSim bude bolji za sve! 💙
