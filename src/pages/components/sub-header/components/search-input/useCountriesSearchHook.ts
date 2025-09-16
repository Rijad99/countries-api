// React
import { ChangeEvent, useState } from 'react';

// Custom Hooks
import { useDebounce } from '../../../../../common/custom-hooks/useDebounceHook.ts';

// Types
import { Country } from '../../../../countries/countries-types/CountriesTypes.ts';

export function useCountriesSearchHook(countries: Country[] | undefined) {
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearch = useDebounce(searchValue, 500);

  const renderCountries =
    debouncedSearch.trim() === ''
      ? countries
      : countries?.filter((country: Country) =>
          country.name.common.toLowerCase().includes(debouncedSearch.toLowerCase())
        );

  const handleSearchCountry = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return {
    searchValue,
    renderCountries,
    handleSearchCountry,
  };
}
