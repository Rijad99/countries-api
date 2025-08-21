export interface CountryNames {
  common: string;
  nativeName?: string;
  official?: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Country {
  flags: Flags;
  name: CountryNames;
  population: number;
  region: string;
  capital: string;
  subregion: string;
  tld: string[];
  currencies: Currency;
  languages: Language;
  borders: string[];
}

export interface Currency {
  [key: string]: {
    symbol: string;
    name: string;
  };
}

export interface Language {
  [key: string]: string;
}
