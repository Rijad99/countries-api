// React
import { ChangeEvent, useState } from 'react';

// Custom Hooks
import { useDebounce } from '../../../common/custom-hooks/useDebounceHook.ts';

// Types
import { Country } from '../../countries/countries-types/CountriesTypes.ts';
import { Option } from '../../../components/select/components/options/Options.types.ts';

export function useCountriesSearchAndFilterHook(countries: Country[] | undefined) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<Option | null>(null);

  const debouncedSearch = useDebounce(searchValue, 500);

  const renderCountries = countries
    ?.filter((country: Country) => (debouncedSearch.trim() ? country.name.common.toLowerCase().includes(debouncedSearch.toLowerCase()) : true))
    .filter((country: Country) => (selectedRegion ? country.region === selectedRegion.value : true));

  const handleSearchCountry = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleRegionChange = (option: Option) => {
    setSelectedRegion(option);
  };

  const handleFilterReset = () => {
    setSearchValue('');
    setSelectedRegion(null);
  };

  return {
    searchValue,
    selectedRegion,
    renderCountries,
    handleSearchCountry,
    handleRegionChange,
    handleFilterReset,
  };
}
