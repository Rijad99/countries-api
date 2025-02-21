// Styles
import { Label } from '../../../../../components/label/Label';
import countryContentStyle from './CountryContent.module.scss';



export interface CountryContentProps {
    name: string,
    population: number,
    region: string,
    capital: string
}

export function CountryContent({ name, population, region, capital }: CountryContentProps) {

    return (
        <div className={countryContentStyle.countryContent}>
            <span className={countryContentStyle.name}>{name}</span>
            <div className={countryContentStyle.countryBaseInfo}>
                <Label title='Population' value={population} />
                <Label title='Region' value={region} />
                <Label title='Capital' value={capital} />
            </div>
        </div>
    )
}
