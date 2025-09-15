// Components
import CountryDetailsDialog from './components/country-details-dialog/CountryDetailsDialog.tsx';

// Types
import { Country } from '../../countries/countries-types/CountriesTypes.ts';

interface CountryDetailsDialogWrapperProps {
  data: Country | undefined;
  error: Error | null;
  isFetchingCountryDetails: boolean;
  handleCloseCountryDetailsDialog: () => void;
}

export function CountryDetailsDialogWrapper({
  data,
  error,
  isFetchingCountryDetails,
  handleCloseCountryDetailsDialog,
}: CountryDetailsDialogWrapperProps) {
  return (
    <CountryDetailsDialog
      country={data}
      error={error}
      isFetchingCountryDetails={isFetchingCountryDetails}
      handleCloseCountryDetailsDialog={handleCloseCountryDetailsDialog}
    />
  );
}
