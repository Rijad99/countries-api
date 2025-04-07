// React
import { useState } from "react"



export function useCountriesListHook() {
    const [isCountryDetailsDialogOpen, setIsCountryDetailsDialogOpen] = useState<boolean>(false);

    const handleOpenCountryDetailsDialog = () => {
        setIsCountryDetailsDialogOpen(true)
    }

    const handleCloseCountryDetailsDialog = () => {
        setIsCountryDetailsDialogOpen(false)
    }

    return { handleOpenCountryDetailsDialog, handleCloseCountryDetailsDialog, isCountryDetailsDialogOpen }
}
