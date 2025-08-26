// Components
import { CountriesList } from '../components/countriest-list/CountriesList';
import { Navigation } from '../components/navigation/Navigation';
import { SubHeader } from '../components/sub-header/SubHeader';

// Styles
import countriesStyle from './Countries.module.scss';
import { useCountriesLoader } from '../components/countriest-list/components/country-details-dialog/useCountriesLoader.ts';

export function Countries() {
  const { countries, error, isFetching, refetchCountriesData } = useCountriesLoader();

  return (
    <div className={countriesStyle.countriesGrid}>
      <Navigation />
      <SubHeader />
      <CountriesList
        countries={countries}
        countriesError={error}
        isFetchingCountries={isFetching}
        refetchCountriesData={refetchCountriesData}
      />
    </div>
  );
}
