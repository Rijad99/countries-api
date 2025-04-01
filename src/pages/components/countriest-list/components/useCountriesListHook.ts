// React
import { useState } from "react"



export function useCountriesListHook() {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const handleOpenCountryDetailsDialog = () => {
        setIsDialogOpen(true)
    }

    const handleCloseCountryDetailsDialog = () => {
        setIsDialogOpen(false)
    }

    return { handleOpenCountryDetailsDialog, handleCloseCountryDetailsDialog, isDialogOpen }
}
