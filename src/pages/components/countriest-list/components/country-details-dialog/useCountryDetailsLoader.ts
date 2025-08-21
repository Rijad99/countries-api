import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CountriesService } from '../../../../countries/CountriesService.ts';

export const useCountryDetailsLoader = () => {
  const queryClient = useQueryClient();

  const countryDetailsResult = useQuery({
    queryKey: ['country-details'],
    queryFn: async () => {
      const country = queryClient.getQueryData<string>(['selected-country']);

      if (!country) {
        throw new Error('Country has to be provided!');
      }

      return await CountriesService.getCountryByName(country).then((data) => data[0]);
    },
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const refetchCountryDetails = (country: string) => {
    queryClient.setQueryData(['selected-country'], country);

    void countryDetailsResult.refetch();
  };

  return {
    ...countryDetailsResult,
    refetchCountryDetails,
  };
};
