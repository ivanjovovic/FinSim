// Dodatni prijevodi za Steps Page - dodati u glavni translations.js

export const stepsTranslations = {
  me: {
    steps: {
      whatToDo: 'Šta treba uraditi:',
      tipsTitle: 'Korisni savjeti:',
      stepLabel: 'Korak',
      previousStep: 'Prethodni korak',
      nextStep: 'Sljedeći korak',
      step1: {
        title: 'Pripremite potrebnu dokumentaciju',
        description: 'Sakupite svu potrebnu dokumentaciju prije odlaska u banku.',
        items: [
          'Lična karta ili pasoš',
          'Rješenje o naknadi (dodatak za njegu i pomoć, invalidnina, materijalno obezbjeđenje, itd.)',
          'Dokaz o mjestu prebivališta',
          'JMBG (Jedinstveni matični broj građana)'
        ],
        tips: [
          'Napravite kopiju svih dokumenata za svoju evidenciju.',
          'Provjerite da su dokumenti važeći i nije im istekao rok.'
        ]
      },
      step2: {
        title: 'Idite u banku i zatražite osnovni platni račun',
        description: 'Posjetite najbližu filijalu banke i jasno im recite šta vam treba.',
        items: [
          'Pitaj za "osnovni platni račun" - to je najjeftinija opcija',
          'Objasni da primaš socijalnu naknadu ili invalidninu',
          'Pitaj o svim troškovima - nema skrivenih naknada',
          'Zatraži da ti objasne svaku stavku u ugovoru'
        ],
        tips: [
          'Ne potpisuj ništa ako ne razumiješ.',
          'Možeš povesti nekoga sa sobom za podršku.',
          'Zatraži pisani pregled svih troškova.'
        ]
      },
      step3: {
        title: 'Potpiši ugovor i aktiviraj račun.',
        description: 'Nakon što razumiješ sve uslove, potpiši ugovor.',
        items: [
          'Pročitajte cijeli ugovor prije potpisivanja.',
          'Zatražite kopiju ugovora za sebe.',
          'Tražite broj žiro računa.',
          'Postavite PIN kod za karticu na bankomatu banke (ako dobijete karticu)'
        ],
        tips: [
          'Zapamtite ili zapišite svoj PIN na sigurnom mjestu.',
          'Nikada ne dijelite PIN ni sa kim, čak ni sa bankarom!',
          'Čuvajte svu dokumentaciju na sigurnom mjestu.'
        ]
      },
      step4: {
        title: 'Dostavite broj računa',
        description: 'Obavijeste instituciju koja vam isplaćuje naknadu o novom računu.',
        items: [
          'Idite u instituciju koja vam isplaćuje naknadu (Centar za socijalni rad, Fond PIO, itd.)',
          'Dostavite im broj svog žiro računa.',
          'Pitajte kada možeš očekivati prvu uplatu.',
          'Zatražite potvrdu o prijemu dokumentacije.'
        ],
        tips: [
          'Prvo plaćanje može potrajati, budite strpljivi',
          'Redovno provjeravajte stanje računa.',
          'Čuvajte sve potvrde o obrađenim zahtjevima.'
        ]
      },
      reminder: {
        title: 'Brzi podsjetnik',
        description: 'Sačuvajte ili odštampajte ovaj podsjetnik da uvijek imate važne informacije pri ruci.',
        documents: 'Dokumenti:',
        documentsText: 'Lična karta, rješenje o naknadi',
        bankAsk: 'U banci tražite:',
        bankAskText: '"Osnovni platni račun"',
        download: 'Preuzmite sliku',
        print: 'Odštampajte',
        share: 'Podijelite',
        downloading: 'Čuva se...'
      },
      navigation: {
        backHome: 'Nazad na početnu',
        createProfile: 'Kreirajte svoj profil'
      }
    }
  },
  en: {
    steps: {
      whatToDo: 'What to do:',
      tipsTitle: 'Useful tips:',
      stepLabel: 'Step',
      previousStep: 'Previous step',
      nextStep: 'Next step',
      step1: {
        title: 'Prepare required documents',
        description: 'Collect all necessary documentation before going to the bank.',
        items: [
          'ID card or passport',
          'Benefit decision (disability, social assistance, etc.)',
          'Proof of address (electricity or water bill)',
          'Personal identification number'
        ],
        tips: [
          'Make copies of all documents for your records',
          'Check that documents are valid and not expired'
        ]
      },
      step2: {
        title: 'Go to bank and request basic payment account',
        description: 'Visit the bank counter and clearly state what you need.',
        items: [
          'Ask for "basic payment account" - the cheapest option',
          'Explain that you receive social benefit or disability',
          'Ask about all costs - no hidden fees',
          'Request explanation of every item in contract'
        ],
        tips: [
          'Don\'t sign anything you don\'t understand',
          'You can bring someone for support',
          'Request written overview of all costs'
        ]
      },
      step3: {
        title: 'Sign contract and activate account',
        description: 'After understanding all conditions, sign the contract.',
        items: [
          'Read entire contract before signing',
          'Request copy of contract for yourself',
          'Receive account number (IBAN)',
          'Set PIN code for card (if receiving card)'
        ],
        tips: [
          'Remember or write down your PIN somewhere safe',
          'Never share PIN with anyone - not even banker!',
          'Keep all documentation in safe place'
        ]
      },
      step4: {
        title: 'Deliver account number to institution',
        description: 'Inform the institution paying your benefit about new account.',
        items: [
          'Go to institution paying your benefit (Social Welfare Center, Pension Fund, etc.)',
          'Deliver your account number (IBAN)',
          'Ask when to expect first payment',
          'Request confirmation of received documentation'
        ],
        tips: [
          'First payment may take time, be patient',
          'Regularly check account balance',
          'Keep all confirmations of processed requests'
        ]
      },
      reminder: {
        title: 'Quick reminder',
        description: 'Save or print this reminder to always have important information at hand.',
        documents: 'Documents:',
        documentsText: 'ID card, benefit decision, proof of address',
        bankAsk: 'At bank ask for:',
        bankAskText: '"Basic payment account" - cheapest option',
        download: 'Download image',
        print: 'Print',
        share: 'Share',
        downloading: 'Exporting...'
      },
      navigation: {
        backHome: 'Back to home',
        createProfile: 'Create your profile'
      }
    }
  }
};
