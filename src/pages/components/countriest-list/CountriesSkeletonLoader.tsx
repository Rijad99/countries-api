// Styles
import countryCardStyle from './components/country-card/CountryCard.module.scss';
import countryContentStyle from './components/country-content/CountryContent.module.scss';

// Components
import { SkeletonLoaderCircular } from '../../../components/skeleton-loading/SkeletonLoading.tsx';

export function CountriesSkeletonLoader() {
  return (
    <div className={`${countryCardStyle.countryCard}`}>
      <SkeletonLoaderCircular width={200} height={125} />
      <div className={countryContentStyle.countryContent}>
        <SkeletonLoaderCircular width={100} height={25} />
        <div className={countryContentStyle.countryBaseInfo}>
          <SkeletonLoaderCircular width={150} height={20} />
          <SkeletonLoaderCircular width={150} height={20} />
          <SkeletonLoaderCircular width={150} height={20} />
        </div>
      </div>
    </div>
  );
}
