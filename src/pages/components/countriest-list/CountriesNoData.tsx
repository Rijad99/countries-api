// Components
import { NoDataToShow } from '../../../components/no-data-to-show/NoDataToShow.tsx';

// TanStack
import { QueryObserverResult } from '@tanstack/react-query';

interface CountriesNoDataProps<TData> {
  id: string;
  title: string;
  label: string;
  isLoading: boolean;
  onRefetchData: () => Promise<QueryObserverResult<TData, Error>>;
}

export function CountriesNoData<TData>({ id, title, label, isLoading, onRefetchData }: CountriesNoDataProps<TData>) {
  return <NoDataToShow<TData> id={id} title={title} label={label} isLoading={isLoading} onRefetchData={onRefetchData} />;
}
