import { useQuery } from "@tanstack/react-query"
import { getCountryByName } from "../../../../../services/CountriesService"

export const useCountryDetailsLoader = (country: string) => {
    const countryDetailsResult = useQuery({ 
        queryKey: ['country-details'],
        queryFn: async () => {
            return await getCountryByName(country);
        },
        enabled: false,
        refetchOnWindowFocus: false,
        retry: false,
    })

    return {
        ...countryDetailsResult,
        refetchCountryDetails: countryDetailsResult.refetch
    };
}
