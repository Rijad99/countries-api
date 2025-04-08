// Components
import Button from "../../../../../components/button/Button";
import { Dialog } from "../../../../../components/dialog/Dialog";
import Svg from "../../../../../components/svg/Svg";

// Types
import { ButtonSize, ButtonType } from "../../../../../components/button/Button.types";
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from "../../../../../components/svg/Svg.types";

// Styles
import countryDetailsDialogStyle from './CountryDetailsDialog.module.scss';

// Icons
import { icons } from "../../../../../common/icons/icons";



export interface CountryDetailsDialogProps {
    handleCloseCountryDetailsDialog: () => void,
}

function CountryDetailsDialog({ handleCloseCountryDetailsDialog }: CountryDetailsDialogProps) {

    return (
        <Dialog classes={countryDetailsDialogStyle.countryDetailsDialog}>
            <Button size={ButtonSize.MEDIUM} type={ButtonType.PRIMARY} onClick={handleCloseCountryDetailsDialog} additionalClasses={countryDetailsDialogStyle.closeCountryDetailsDialogButton}>
                <Svg width='8' height='6' viewBox='0 0 12 7' path={icons.arrowIcon} additionalClasses={`${countryDetailsDialogStyle.arrowIcon} ${SvgColors.BLACK}`} stroke={SvgColors.BLACK} strokeWidth='1.5' strokeLinecap={SvgStrokeLineCap.ROUND} strokeLinejoin={SvgStrokeLineJoin.ROUND} />
                Back
            </Button>
        </Dialog>
    )
}

export default CountryDetailsDialog;
