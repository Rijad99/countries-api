// Styles
import countryDetailsInfoStyle from './CountryDetailsInfo.module.scss';

// Components
import { Label, LabelType } from '../../../../../components/label/Label';

// Types
import { Country } from '../../../../countries/countries-types/CountriesTypes.ts';

export interface CountryDetailsInfoProps {
  country: Country | undefined;
}

export function CountryDetailsInfo({ country }: CountryDetailsInfoProps) {
  const currencies =
    country &&
    Object.values(country.currencies)
      .map((currency) => `${currency.name} (${currency.symbol})`)
      .join(', ');
  const languages = country && Object.values(country.languages).join(', ');

  return (
    <div className={countryDetailsInfoStyle.countryDetails}>
      <div className={countryDetailsInfoStyle.countryDetailsInfo}>
        <Label title="Native Name" value={country?.name.common} type={LabelType.LARGE} />
        <Label title="Population" value={country?.population} type={LabelType.LARGE} />
        <Label title="Region" value={country?.region} type={LabelType.LARGE} />
        <Label title="Sub Region" value={country?.subregion} type={LabelType.LARGE} />
        <Label title="Capital" value={country?.capital} type={LabelType.LARGE} />
      </div>
      <div className={countryDetailsInfoStyle.countryDetailsInfo}>
        <Label title="Top Level Domain" value={country?.tld.join(' ')} type={LabelType.LARGE} />
        <Label title="Currencies" value={currencies} type={LabelType.LARGE} />
        <Label title="Languages" value={languages} type={LabelType.LARGE} />
      </div>
    </div>
  );
}
