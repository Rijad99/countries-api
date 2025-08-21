// React
import { useContext } from 'react';

// Components
import Button from '../../../../../components/button/Button';
import { Dialog } from '../../../../../components/dialog/Dialog';
import { CountryDetails } from './CountryDetails';
import Svg from '../../../../../components/svg/Svg';

// Types
import { ButtonSize, ButtonType } from '../../../../../components/button/Button.types';
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../../../components/svg/Svg.types';
import { Theme } from '../../../navigation/components/theme-switcher/ThemeSwitcher';
import { Country } from '../../../../countries/countries-types/CountriesTypes.ts';

// Styles
import countryDetailsDialogStyle from './CountryDetailsDialog.module.scss';

// Icons
import { icons } from '../../../../../common/icons/icons';

// Contexts
import { ThemeContext } from '../../../../../context/ThemeContext';

export interface CountryDetailsDialogProps {
  country: Country | undefined;
  isFetchingCountryDetails: boolean;
  error: Error | null;
  handleCloseCountryDetailsDialog: () => void;
}

function CountryDetailsDialog({
  country,
  isFetchingCountryDetails,
  error,
  handleCloseCountryDetailsDialog,
}: CountryDetailsDialogProps) {
  const { theme } = useContext(ThemeContext);

  const themeIconStrokeColor = theme === Theme.LIGHT ? SvgColors.BLACK : SvgColors.WHITE;

  return (
    <Dialog classes={`${countryDetailsDialogStyle.countryDetailsDialog} ${countryDetailsDialogStyle[`${theme}Bg`]}`}>
      <Button
        size={ButtonSize.MEDIUM}
        type={ButtonType.PRIMARY}
        onClick={handleCloseCountryDetailsDialog}
        additionalClasses={`${countryDetailsDialogStyle.closeCountryDetailsDialogButton} ${countryDetailsDialogStyle[theme]}`}
      >
        <Svg
          width="8"
          height="6"
          viewBox="0 0 12 7"
          path={icons.arrowIcon}
          additionalClasses={`${countryDetailsDialogStyle.arrowIcon} ${SvgColors.BLACK}`}
          stroke={themeIconStrokeColor}
          strokeWidth="1.5"
          strokeLinecap={SvgStrokeLineCap.ROUND}
          strokeLinejoin={SvgStrokeLineJoin.ROUND}
        />
        Back
      </Button>
      <CountryDetails country={country} isFetchingCountryDetails={isFetchingCountryDetails} error={error} />
    </Dialog>
  );
}

export default CountryDetailsDialog;
