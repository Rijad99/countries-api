// Components
import { Label } from '../../../../../components/label/Label';

// Styles
import countryContentStyle from './CountryContent.module.scss';

export interface CountryContentProps {
  name: string;
  population: number;
  region: string;
  capital: string;
}

export function CountryContent({ name, population, region, capital }: CountryContentProps) {
  const formattedPopulation = population.toLocaleString();

  return (
    <div className={countryContentStyle.countryContent}>
      <span className={countryContentStyle.name}>{name}</span>
      <div className={countryContentStyle.countryBaseInfo}>
        <Label title="Population" value={formattedPopulation} />
        <Label title="Region" value={region} />
        <Label title="Capital" value={capital} />
      </div>
    </div>
  );
}
