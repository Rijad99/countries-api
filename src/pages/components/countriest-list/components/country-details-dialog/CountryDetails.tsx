// Styles
import { Country } from '../../../../../services/countries-response-types/CountriesResponseTypes';
import countryDetailsStyle from './CountryDetails.module.scss';

// Components
import { CountryDetailsInfo } from './CountryDetailsInfo';
import { CountryDetailsBorders } from './CountryDetailsBorders';


export interface CountryDetailsProps {
    country: Country | undefined
}

export function CountryDetails({ country }: CountryDetailsProps) {

    return (
        <div className={countryDetailsStyle.countryDetailsContainer}>
            <div className={countryDetailsStyle.leftPartCountryInfo}>
                <img src={country?.flags.png} className={countryDetailsStyle.flag} />
            </div>
            <div className={countryDetailsStyle.rightPartCountryInfo}>
                <h1>{country?.name.common}</h1>
                <CountryDetailsInfo />
                <CountryDetailsBorders />
            </div>
        </div>
    )
}
