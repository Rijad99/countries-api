// Components
import { CountriesList } from '../components/countriest-list/CountriesList';
import { Navigation } from '../components/navigation/Navigation';
import { SubHeader } from '../components/sub-header/SubHeader';

// Styles
import countriesStyle from './Countries.module.scss';
import { useCountriesLoader } from '../components/countriest-list/components/country-details-dialog/useCountriesLoader.ts';
import { useCountriesSearchHook } from '../components/sub-header/components/search-input/useCountriesSearchHook.ts';

export function Countries() {
  const { countries, error, isFetching, refetchCountriesData } = useCountriesLoader();
  const { searchValue, renderCountries, handleSearchCountry } = useCountriesSearchHook(countries);

  return (
    <div className={countriesStyle.countriesGrid}>
      <Navigation />
      <SubHeader searchValue={searchValue} onChange={handleSearchCountry} />
      <CountriesList
        countries={renderCountries}
        countriesError={error}
        isFetchingCountries={isFetching}
        refetchCountriesData={refetchCountriesData}
      />
    </div>
  );
}
