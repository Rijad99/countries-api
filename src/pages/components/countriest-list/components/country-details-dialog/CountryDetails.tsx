// Styles
import { Country } from '../../../../../services/countries-response-types/CountriesResponseTypes';
import countryDetailsStyle from './CountryDetails.module.scss';



export interface CountryDetailsProps {
    country: Country | undefined
}

export function CountryDetails({ country }: CountryDetailsProps) {

    return (
        <div className={countryDetailsStyle.countryDetailsContainer}>
            <div className={countryDetailsStyle.leftPartCountryInfo}>
                <img src={country?.flags.png}  />
            </div>
            <div className={countryDetailsStyle.rightPartCountryInfo}>
                {country?.name.common}
            </div>
        </div>
    )
}
