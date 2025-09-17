// Styles
import countryDetailsBordersStyle from './CountryDetailsBorders.module.scss';

// Components
import { Category } from '../../../../../components/category/Category';
import { Label } from '../../../../../components/label/Label';

// Types
import { Country } from '../../../../countries/countries-types/CountriesTypes.ts';

export interface CountryDetailsBordersProps {
  country: Country | undefined;
}

export function CountryDetailsBorders({ country }: CountryDetailsBordersProps) {
  const renderBordersLabel = country && country.borders ? <Label title="Border Countries" /> : null;
  const renderCountryBorders = country && country.borders?.map((border, index) => <Category key={index} category={border} />);

  return (
    <div className={countryDetailsBordersStyle.countryDetailsBorders}>
      {renderBordersLabel}
      {renderCountryBorders}
    </div>
  );
}
