// Components
import { CountryCard } from './components/country-card/CountryCard.tsx';

// Types
import { Country } from '../../countries/countries-types/CountriesTypes.ts';

interface CountriesProps {
  countries: Country[];
  handleOpenCountryDetailsDialog: (country: string) => void;
}

export function Countries({ countries, handleOpenCountryDetailsDialog }: CountriesProps) {
  return countries.map((country, index) => (
    <CountryCard
      key={index}
      flag={country.flags.png}
      name={country.name.common}
      population={country.population}
      region={country.region}
      capital={country.capital}
      handleOpenCountryDetailsDialog={handleOpenCountryDetailsDialog}
    />
  ));
}
