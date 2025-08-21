import { useQuery } from '@tanstack/react-query';
import { CountriesService } from '../../../../countries/CountriesService.ts';

export const useCountriesLoader = () => {
  const countriesResult = useQuery({
    queryKey: ['countries'],
    queryFn: async () => CountriesService.getAllCountries().then((countries) => countries),
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    ...countriesResult,
    countries: countriesResult.data,
  };
};
