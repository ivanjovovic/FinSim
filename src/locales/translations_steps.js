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
        title: 'Pripremi potrebne dokumente',
        description: 'Sakupi svu potrebnu dokumentaciju prije odlaska u banku.',
        items: [
          'Lična karta ili pasoš',
          'Rješenje o naknadi (invalidnina, materijalno obezbjeđenje, itd.)',
          'Dokaz o adresi stanovanja (račun za struju ili vodu)',
          'JMBG (Jedinstveni matični broj građana)'
        ],
        tips: [
          'Napravi kopije svih dokumenata za svoju evidenciju',
          'Provjeri da su dokumenti važeći i nije im istekao rok'
        ]
      },
      step2: {
        title: 'Idi u banku i zatraži osnovni platni račun',
        description: 'Posjeti šalter banke i jasno reci šta ti treba.',
        items: [
          'Pitaj za "osnovni platni račun" - to je najjeftinija opcija',
          'Objasni da primaš socijalnu naknadu ili invalidninu',
          'Pitaj o svim troškovima - nema skrivenih naknada',
          'Zatraži da ti objasne svaku stavku u ugovoru'
        ],
        tips: [
          'Ne potpisuj ništa ako ne razumiješ',
          'Možeš povesti nekoga sa sobom za podršku',
          'Zatraži pisani pregled svih troškova'
        ]
      },
      step3: {
        title: 'Potpiši ugovor i aktiviraj račun',
        description: 'Nakon što razumiješ sve uslove, potpiši ugovor.',
        items: [
          'Pročitaj cijeli ugovor prije potpisivanja',
          'Zatraži kopiju ugovora za sebe',
          'Dobiješ broj računa (IBAN)',
          'Postavi PIN kod za karticu (ako dobijaš karticu)'
        ],
        tips: [
          'Zapamti ili zapiši svoj PIN negdje sigurno',
          'Nikada ne dijeli PIN ni sa kim - ni sa bankarom!',
          'Zadrži svu dokumentaciju na sigurnom mjestu'
        ]
      },
      step4: {
        title: 'Dostavi broj računa instituciji',
        description: 'Obavijesti instituciju koja ti isplaćuje naknadu o novom računu.',
        items: [
          'Idi u instituciju koja ti isplaćuje naknadu (Centar za socijalni rad, Fond PIO, itd.)',
          'Dostavi im broj svog računa (IBAN)',
          'Pitaj kada možeš očekivati prvu uplatu',
          'Zatraži potvrdu o prijemu dokumentacije'
        ],
        tips: [
          'Prvo plaćanje može potrajati, budi strpljiv',
          'Redovno provjeri stanje računa',
          'Čuvaj sve potvrde o obrađenim zahtjevima'
        ]
      },
      reminder: {
        title: 'Brzi podsjetnik',
        description: 'Sačuvaj ili odštampaj ovaj podsjetnik da uvijek imaš važne informacije pri ruci.',
        documents: 'Dokumenti:',
        documentsText: 'Lična karta, rješenje o naknadi, dokaz o adresi',
        bankAsk: 'U banci traži:',
        bankAskText: '"Osnovni platni račun" - najjeftinija opcija',
        download: 'Preuzmi sliku',
        print: 'Odštampaj',
        share: 'Podijeli',
        downloading: 'Izvoz...'
      },
      navigation: {
        backHome: 'Nazad na početnu',
        createProfile: 'Kreiraj svoj profil'
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
