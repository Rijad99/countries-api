// React
import { useState, useEffect, createContext } from 'react';

// Response types
import { Country } from '../services/countries-response-types/CountriesResponseTypes';

// Service
import { getAllCountries } from '../services/CountriesService';

interface CountriesContextProps {
  countries: Country[] | null;
  setCountries: (countries: Country[]) => void;
}

const CountriesContext = createContext<CountriesContextProps>({
  countries: null,
  setCountries: () => null,
});

interface CountriesProviderProps {
  children: React.ReactNode;
}

const CountriesProvider: React.FC<CountriesProviderProps> = ({ children }) => {
  const [countries, setCountries] = useState<Country[] | null>(null);

  useEffect(() => {
    getAllCountries()
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
