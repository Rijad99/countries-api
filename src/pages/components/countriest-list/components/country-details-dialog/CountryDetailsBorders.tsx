// Styles
import countryDetailsBordersStyle from './CountryDetailsBorders.module.scss'

// Components
import { Category } from '../../../../../components/category/Category';
import { Label } from '../../../../../components/label/Label';



export function CountryDetailsBorders() {

    return (
        <div className={countryDetailsBordersStyle.countryDetailsBorders}>
            <Label title='Border Countries' />
            <Category category='Placeholder' />
            <Category category='Placeholder' />
            <Category category='Placeholder' />
        </div>
    )
}
