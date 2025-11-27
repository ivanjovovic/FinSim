export interface Profile {
  id: string;
  label: string;
  defaultIncome: number;
  description: string;
}

export const PROFILES: Profile[] = [
  {
    id: 'minimalna_zarada',
    label: 'Korisnik minimalne zarade',
    defaultIncome: 600,
    description: 'Primanje minimalne zarade – važno je da novac potraje do kraja mjeseca uz plaćanje osnovnih troškova.',
  },
  {
    id: 'materijalno_obezbjedjenje',
    label: 'Korisnik materijalnog obezbjeđenja',
    defaultIncome: 320,
    description: 'Materijalno obezbjeđenje kao glavni izvor prihoda – fokus na osnovne životne troškove i račune.',
  },
  {
    id: 'licna_invalidnina',
    label: 'Korisnik lične invalidnine',
    defaultIncome: 320,
    description: 'Lična invalidnina, uz moguće dodatne troškove liječenja i pomoći u svakodnevnom životu.',
  },
  {
    id: 'njega_i_pomoc',
    label: 'Korisnik dodatka za njegu i pomoć',
    defaultIncome: 320,
    description: 'Dodatak za njegu i pomoć – dio sredstava ide na brigu, njegu i podršku u svakodnevnim aktivnostima.',
  },
  {
    id: 'naknada_nezaposleni',
    label: 'Korisnik naknade za nezaposlene',
    defaultIncome: 320,
    description: 'Naknada za nezaposlene – potrebno je pažljivo rasporediti novac na račune, hranu i traženje posla.',
  },
];

export interface ExpenseCategory {
  id: string;
  name: string;
  amount: number;
  dueDay: number;
  category: string;
  mandatory: boolean;
}

export function getBaseExpenses(profileId: string, income: number): ExpenseCategory[] {
  const expenses: ExpenseCategory[] = [];

  if (profileId === 'minimalna_zarada') {
    expenses.push(
      {
        id: 'kirija',
        name: 'Kirija',
        amount: Math.round(income * 0.4),
        dueDay: 3,
        category: 'kirija',
        mandatory: true,
      },
      {
        id: 'racuni',
        name: 'Struja i voda',
        amount: Math.round(income * 0.2),
        dueDay: 5,
        category: 'računi',
        mandatory: true,
      },
      {
        id: 'hrana',
        name: 'Hrana',
        amount: Math.round(income * 0.2),
        dueDay: 6,
        category: 'hrana',
        mandatory: true,
      },
    );
  } else if (profileId === 'materijalno_obezbjedjenje') {
    expenses.push(
      {
        id: 'hrana',
        name: 'Hrana i osnovne namirnice',
        amount: Math.round(income * 0.45),
        dueDay: 4,
        category: 'hrana',
        mandatory: true,
      },
      {
        id: 'racuni',
        name: 'Struja, voda i komunalije',
        amount: Math.round(income * 0.2),
        dueDay: 5,
        category: 'računi',
        mandatory: true,
      },
      {
        id: 'osnovne_potrebe',
        name: 'Osnovne potrepštine',
        amount: Math.round(income * 0.15),
        dueDay: 7,
        category: 'ostalo',
        mandatory: true,
      },
    );
  } else if (profileId === 'licna_invalidnina') {
    expenses.push(
      {
        id: 'kirija',
        name: 'Kirija',
        amount: Math.round(income * 0.4),
        dueDay: 3,
        category: 'kirija',
        mandatory: true,
      },
      {
        id: 'racuni',
        name: 'Struja i voda',
        amount: Math.round(income * 0.18),
        dueDay: 5,
        category: 'računi',
        mandatory: true,
      },
      {
        id: 'lijekovi',
        name: 'Lijekovi',
        amount: Math.round(income * 0.18),
        dueDay: 7,
        category: 'lijekovi',
        mandatory: true,
      },
    );
  } else if (profileId === 'njega_i_pomoc') {
    expenses.push(
      {
        id: 'njega',
        name: 'Njega i pomoć',
        amount: Math.round(income * 0.3),
        dueDay: 4,
        category: 'njega',
        mandatory: true,
      },
      {
        id: 'hrana',
        name: 'Hrana',
        amount: Math.round(income * 0.24),
        dueDay: 6,
        category: 'hrana',
        mandatory: true,
      },
      {
        id: 'racuni',
        name: 'Struja i voda',
        amount: Math.round(income * 0.18),
        dueDay: 5,
        category: 'računi',
        mandatory: true,
      },
    );
  } else if (profileId === 'naknada_nezaposleni') {
    expenses.push(
      {
        id: 'kirija',
        name: 'Kirija',
        amount: Math.round(income * 0.4),
        dueDay: 3,
        category: 'kirija',
        mandatory: true,
      },
      {
        id: 'racuni',
        name: 'Struja i voda',
        amount: Math.round(income * 0.18),
        dueDay: 5,
        category: 'računi',
        mandatory: true,
      },
      {
        id: 'hrana',
        name: 'Hrana',
        amount: Math.round(income * 0.2),
        dueDay: 6,
        category: 'hrana',
        mandatory: true,
      },
    );
  }

  return expenses;
}
