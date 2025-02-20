// Components
import { CountriesList } from '../components/countriest-list/CountriesList';
import { Navigation } from '../components/navigation/Navigation';
import { SubHeader } from '../components/sub-header/SubHeader';

// Styles
import countriesStyle from './Countries.module.scss';



export function Countries() {

    return (
        <div className={countriesStyle.countriesGrid}>
            <Navigation />
            <SubHeader />
            <CountriesList />
        </div>
    )
}
