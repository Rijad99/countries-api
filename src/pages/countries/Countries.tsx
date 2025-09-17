// Components
import { CountriesList } from '../components/countriest-list/CountriesList';
import { Navigation } from '../components/navigation/Navigation';
import { SubHeader } from '../components/sub-header/SubHeader';

// Styles
import countriesStyle from './Countries.module.scss';
import { useCountriesLoader } from '../components/countriest-list/components/country-details-dialog/useCountriesLoader.ts';
import { useCountriesSearchAndFilterHook } from '../components/countriest-list/useCountriesSearchAndFilterHook.ts';

export function Countries() {
  const { countries, error, isFetching, refetchCountriesData } = useCountriesLoader();
  const { searchValue, selectedRegion, renderCountries, handleSearchCountry, handleRegionChange } = useCountriesSearchAndFilterHook(countries);

  return (
    <div className={countriesStyle.countriesGrid}>
      <Navigation />
      <SubHeader searchValue={searchValue} selectedRegion={selectedRegion} onChange={handleSearchCountry} onRegionChange={handleRegionChange} />
      <CountriesList
        countries={renderCountries}
        countriesError={error}
        isFetchingCountries={isFetching}
        refetchCountriesData={refetchCountriesData}
      />
    </div>
  );
}
