// Components
import Button from "../../../../../components/button/Button";
import { ButtonSize, ButtonType } from "../../../../../components/button/Button.types";
import { Dialog } from "../../../../../components/dialog/Dialog";

// Styles
import countryDetailsDialogStyle from './CountryDetailsDialog.module.scss';



export interface CountryDetailsDialogProps {
    handleCloseCountryDetailsDialog: () => void,
}

function CountryDetailsDialog({ handleCloseCountryDetailsDialog }: CountryDetailsDialogProps) {

    return (
        <Dialog classes={countryDetailsDialogStyle.countryDetailsDialog}>
            <Button size={ButtonSize.MEDIUM} type={ButtonType.PRIMARY} onClick={handleCloseCountryDetailsDialog} additionalClasses={countryDetailsDialogStyle.closeCountryDetailsDialogButton}>
                Back
            </Button>
        </Dialog>
    )
}

export default CountryDetailsDialog;
