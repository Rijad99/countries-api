// Styles
import countryDetailsStyle from './CountryDetails.module.scss';
import countryDetailsInfoStyle from './CountryDetailsInfo.module.scss';
import countryDetailsBordersStyle from './CountryDetailsBorders.module.scss';

// Components
import { CountryDetailsInfo } from './CountryDetailsInfo';
import { CountryDetailsBorders } from './CountryDetailsBorders';
import { SkeletonLoaderCircular, SkeletonLoading } from '../../../../../components/skeleton-loading/SkeletonLoading';

// Response Types
import { Country } from '../../../../countries/countries-types/CountriesTypes.ts';

export interface CountryDetailsProps {
  country: Country | undefined;
  isFetchingCountryDetails: boolean;
  error: Error | null;
}

export function CountryDetails({ country, isFetchingCountryDetails }: CountryDetailsProps) {
  if (isFetchingCountryDetails) {
    return <CountryDetailsSkeletonLoader />;
  }

  if (!isFetchingCountryDetails && country) {
    return (
      <div className={countryDetailsStyle.countryDetailsContainer}>
        <div className={countryDetailsStyle.leftPartCountryInfo}>
          <img src={country?.flags.png} alt={country.name.common} className={countryDetailsStyle.flag} />
        </div>
        <div className={countryDetailsStyle.rightPartCountryInfo}>
          <h1>{country?.name.common}</h1>
          <CountryDetailsInfo country={country} />
          <CountryDetailsBorders country={country} />
        </div>
      </div>
    );
  }
}

function CountryDetailsSkeletonLoader() {
  return (
    <SkeletonLoading>
      <div className={countryDetailsStyle.countryDetailsContainer}>
        <div className={countryDetailsStyle.leftPartCountryInfo}>
          <SkeletonLoaderCircular width={550} height={300} />
        </div>
        <div className={countryDetailsStyle.rightPartCountryInfo}>
          <SkeletonLoaderCircular width={250} height={55} />
          <div className={countryDetailsInfoStyle.countryDetails}>
            <div className={countryDetailsInfoStyle.countryDetailsInfo}>
              <SkeletonLoaderCircular width={150} height={20} />
              <SkeletonLoaderCircular width={150} height={20} />
              <SkeletonLoaderCircular width={150} height={20} />
              <SkeletonLoaderCircular width={150} height={20} />
              <SkeletonLoaderCircular width={150} height={20} />
            </div>
            <div className={countryDetailsInfoStyle.countryDetailsInfo}>
              <SkeletonLoaderCircular width={150} height={20} />
              <SkeletonLoaderCircular width={150} height={20} />
              <SkeletonLoaderCircular width={150} height={20} />
            </div>
          </div>
          <div className={countryDetailsBordersStyle.countryDetailsBorders}>
            <SkeletonLoaderCircular width={225} height={20} />
          </div>
        </div>
      </div>
    </SkeletonLoading>
  );
}
