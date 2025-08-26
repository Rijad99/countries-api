// React
import { useState } from 'react';

// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import countriesListStyle from './CountriesList.module.scss';

// Components
import { CountryCard } from './components/country-card/CountryCard';
import CountryDetailsDialog from './components/country-details-dialog/CountryDetailsDialog';

// Contexts
import { useCountryDetailsLoader } from './components/country-details-dialog/useCountryDetailsLoader';
import { Country } from '../../countries/countries-types/CountriesTypes.ts';
import { CountriesSkeletonLoader } from './CountriesSkeletonLoader.tsx';
import { NoDataToShow } from '../../../components/no-data-to-show/NoDataToShow.tsx';
import { QueryObserverResult } from '@tanstack/react-query';
import { SystemError } from '../../../components/system-error/SystemError.tsx';

export interface CountriesListProps {
  countries: Country[] | undefined;
  countriesError: Error | null;
  isFetchingCountries: boolean;
  refetchCountriesData: () => Promise<QueryObserverResult<Country[], Error>>;
}

export function CountriesList({
  countries,
  countriesError,
  isFetchingCountries,
  refetchCountriesData,
}: CountriesListProps) {
  const [isCountryDetailsDialogOpen, setIsCountryDetailsDialogOpen] = useState<boolean>(false);
  const { data, error, isFetching, refetchCountryDetails } = useCountryDetailsLoader();

  const handleOpenCountryDetailsDialog = (country: string) => {
    setIsCountryDetailsDialogOpen(true);
    refetchCountryDetails(country);
  };

  const handleCloseCountryDetailsDialog = () => {
    setIsCountryDetailsDialogOpen(false);
  };

  const renderNoDataComponent =
    (!countries || countries.length === 0) && !countriesError ? (
      <NoDataToShow<Country[]>
        id={'countries-no-data'}
        title={'No Data'}
        label={'There is currently no Countries data do be shown'}
        onRefetchData={refetchCountriesData}
      />
    ) : null;
  const renderCountriesError = countriesError ? (
    <SystemError<Country[]>
      id={'countries-system-error'}
      title={'Countries failed to load'}
      label={'System Error occurred while trying to fetch Countries data'}
      error={countriesError}
      onRefetchData={refetchCountriesData}
    />
  ) : null;
  const renderCountriesSkeletonLoader = isFetchingCountries ? <CountriesSkeletonLoader /> : null;
  const renderCountries =
    !isFetchingCountries && countries
      ? countries.map((country, index) => (
          <CountryCard
            key={index}
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            handleOpenCountryDetailsDialog={handleOpenCountryDetailsDialog}
          />
        ))
      : null;
  const renderCountryDetailsDialog = isCountryDetailsDialogOpen ? (
    <CountryDetailsDialog
      country={data}
      error={error}
      isFetchingCountryDetails={isFetching}
      handleCloseCountryDetailsDialog={handleCloseCountryDetailsDialog}
    />
  ) : null;

  return (
    <div className={`${countriesStyle.countriesList} ${countriesListStyle.countries}`}>
      {renderCountriesSkeletonLoader}
      {renderNoDataComponent}
      {renderCountries}
      {renderCountriesError}
      {renderCountryDetailsDialog}
    </div>
  );
}
