// Components
import { SystemError } from '../../../components/system-error/SystemError.tsx';

// TanStack
import { QueryObserverResult } from '@tanstack/react-query';

interface CountriesErrorProps<TData> {
  id: string;
  title: string;
  label: string;
  error: Error;
  isLoading: boolean;
  onRefetchData: () => Promise<QueryObserverResult<TData, Error>>;
}

export function CountriesError<TData>({ id, title, label, error, isLoading, onRefetchData }: CountriesErrorProps<TData>) {
  return <SystemError<TData> id={id} title={title} label={label} error={error} isLoading={isLoading} onRefetchData={onRefetchData} />;
}
