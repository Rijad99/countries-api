import { useState } from 'react';

export function useCountryDetailsDialogHook() {
  const [isCountryDetailsDialogOpen, setIsCountryDetailsDialogOpen] = useState<boolean>(false);

  const handleOpenCountryDetailsDialog = () => {
    setIsCountryDetailsDialogOpen(true);
  };

  const handleCloseCountryDetailsDialog = () => {
    setIsCountryDetailsDialogOpen(false);
  };

  return {
    isCountryDetailsDialogOpen,
    handleOpenCountryDetailsDialog,
    handleCloseCountryDetailsDialog,
  };
}
