// Styles
import countryDetailsInfoStyle from './CountryDetailsInfo.module.scss';

// Components
import { Label, LabelType } from '../../../../../components/label/Label';



export function CountryDetailsInfo() {

    return (
        <div className={countryDetailsInfoStyle.countryDetails}>
            <div className={countryDetailsInfoStyle.countryDetailsInfo}>
                <Label title='Native Name' type={LabelType.LARGE} />
                <Label title='Population' type={LabelType.LARGE} />
                <Label title='Region' type={LabelType.LARGE} />
                <Label title='Sub Region' type={LabelType.LARGE} />
                <Label title='Capital' type={LabelType.LARGE} />
            </div>
            <div className={countryDetailsInfoStyle.countryDetailsInfo}>
                <Label title='Top Level Domain' type={LabelType.LARGE} />
                <Label title='Currencies' type={LabelType.LARGE} />
                <Label title='Languages' type={LabelType.LARGE} />
            </div>
        </div>
    )
}
