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
    country && country.currencies
      ? Object.values(country.currencies)
          .map((currency) => `${currency.name} (${currency.symbol})`)
          .join(', ')
      : 'Unknown';
  const languages = country && Object.values(country.languages).join(', ');

  const formattedPopulation = country?.population ? country.population.toLocaleString() : 'Unknown';

  return (
    <div className={countryDetailsInfoStyle.countryDetails}>
      <div className={countryDetailsInfoStyle.countryDetailsInfo}>
        <Label title="Native Name" value={country?.name.common} type={LabelType.LARGE} />
        <Label title="Population" value={formattedPopulation} type={LabelType.LARGE} />
        <Label title="Region" value={country?.region} type={LabelType.LARGE} />
        <Label title="Sub Region" value={country?.subregion ?? 'Unknown'} type={LabelType.LARGE} />
        <Label title="Capital" value={country?.capital ?? 'Unknown'} type={LabelType.LARGE} />
      </div>
      <div className={countryDetailsInfoStyle.countryDetailsInfo}>
        <Label title="Top Level Domain" value={country?.tld.join(' ')} type={LabelType.LARGE} />
        <Label title="Currencies" value={currencies} type={LabelType.LARGE} />
        <Label title="Languages" value={languages} type={LabelType.LARGE} />
      </div>
    </div>
  );
}
