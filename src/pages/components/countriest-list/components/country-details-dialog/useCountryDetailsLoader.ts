import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getCountryByName } from "../../../../../services/CountriesService"

export const useCountryDetailsLoader = () => {
    const queryClient = useQueryClient();

    const countryDetailsResult = useQuery({ 
        queryKey: ["country-details"],
        queryFn: async () => {
            const country = queryClient.getQueryData<string>(['selected-country']);

            if (!country) {
                throw new Error("Country has to be provided!");
            }

            return await getCountryByName(country).then(data => data[0]);
        },
        enabled: false,
        refetchOnWindowFocus: false,
        retry: false,
    })

    const refetchCountryDetails = async (country: string) => {
        queryClient.setQueryData(["selected-country"], country);

        countryDetailsResult.refetch();
    }

    return {
        ...countryDetailsResult,
        refetchCountryDetails
    };
}
