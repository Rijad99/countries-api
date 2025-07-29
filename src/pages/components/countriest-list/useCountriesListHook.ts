// React
import { useState } from "react"

// Types
import { Country } from "../../../services/countries-response-types/CountriesResponseTypes";

// Service
import { getCountryByName } from "../../../services/CountriesService";


export function useCountriesListHook() {
    const [country, setCountry] = useState<Country>();
    const [isCountryDetailsDialogOpen, setIsCountryDetailsDialogOpen] = useState<boolean>(false);

    const handleOpenCountryDetailsDialog = (country: string) => {
        setIsCountryDetailsDialogOpen(true);
        handleGetCountryData(country);
    }

    const handleCloseCountryDetailsDialog = () => {
        setIsCountryDetailsDialogOpen(false)
    }

    const handleGetCountryData = (country: string) => {
        getCountryByName(country)
            .then(data => setCountry(data[0]))
            .catch(error => console.log(error));
    }

    return { country, handleOpenCountryDetailsDialog, handleCloseCountryDetailsDialog, handleGetCountryData, isCountryDetailsDialogOpen }
}
