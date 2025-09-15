// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import countriesListStyle from './CountriesList.module.scss';

// Custom Hooks
import { useCountryDetailsLoader } from './components/country-details-dialog/useCountryDetailsLoader';

// Types
import { Country } from '../../countries/countries-types/CountriesTypes.ts';

// TanStack
import { QueryObserverResult } from '@tanstack/react-query';

// Components
import { CountriesError } from './CountriesError.tsx';
import { Countries } from './Countries.tsx';
import { CountryDetailsDialogWrapper } from './CountryDetailsDialogWrapper.tsx';
import { CountriesSkeletonLoader } from './CountriesSkeletonLoader.tsx';
import { CountriesNoData } from './CountriesNoData.tsx';
import { useCountryDetailsDialogHook } from './useCountryDetailsDialogHook.ts';

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
  const { data, error, isFetching, refetchCountryDetails } = useCountryDetailsLoader();
  const { isCountryDetailsDialogOpen, handleOpenCountryDetailsDialog, handleCloseCountryDetailsDialog } =
    useCountryDetailsDialogHook();

  const handleOpenDialogAndCountryFetch = (country: string) => {
    handleOpenCountryDetailsDialog();
    refetchCountryDetails(country);
  };

  const renderNoDataComponent =
    (!countries || countries.length === 0) && !countriesError ? (
      <CountriesNoData
        id={'countries-no-data'}
        title={'No Data'}
        label={'There is currently no Countries data do be shown'}
        isLoading={isFetchingCountries}
        onRefetchData={refetchCountriesData}
      />
    ) : null;
  const renderCountriesError = countriesError ? (
    <CountriesError
      id={'countries-system-error'}
      title={'Countries failed to load'}
      label={'System Error occurred while trying to fetch Countries data'}
      error={countriesError}
      isLoading={isFetchingCountries}
      onRefetchData={refetchCountriesData}
    />
  ) : null;
  const renderCountriesSkeletonLoader = isFetchingCountries ? <CountriesSkeletonLoader /> : null;
  const renderCountries =
    !isFetchingCountries && countries ? (
      <Countries countries={countries} handleOpenCountryDetailsDialog={handleOpenDialogAndCountryFetch} />
    ) : null;
  const renderCountryDetailsDialog = isCountryDetailsDialogOpen ? (
    <CountryDetailsDialogWrapper
      data={data}
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
