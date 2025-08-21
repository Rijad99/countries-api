// React
import { useState, useEffect, createContext, ReactNode, FC } from 'react';

// Response countries-types
import { Country } from '../pages/countries/countries-types/CountriesTypes.ts';

// Service
import { CountriesService } from '../pages/countries/CountriesService.ts';


interface CountriesContextProps {
  countries: Country[] | null;
  setCountries: (countries: Country[]) => void;
}

const CountriesContext = createContext<CountriesContextProps>({
  countries: null,
  setCountries: () => null,
});

interface CountriesProviderProps {
  children: ReactNode;
}

const CountriesProvider: FC<CountriesProviderProps> = ({ children }) => {
  const [countries, setCountries] = useState<Country[] | null>(null);

  useEffect(() => {
    CountriesService.getAllCountries()
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const value = {
    countries,
    setCountries,
  };

  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
};

export { CountriesContext, CountriesProvider };
