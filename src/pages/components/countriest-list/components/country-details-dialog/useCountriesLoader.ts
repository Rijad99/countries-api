import { useQuery } from '@tanstack/react-query';
import { getAllCountries } from '../../../../../services/CountriesService.ts';

export const useCountriesLoader = () => {
  const countriesResult = useQuery({
    queryKey: ['countries'],
    queryFn: async () => getAllCountries().then((countries) => countries),
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    ...countriesResult,
    countries: countriesResult.data,
  };
};
