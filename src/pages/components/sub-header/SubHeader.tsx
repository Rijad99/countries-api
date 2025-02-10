import countriesStyle from '../../countries/Countries.module.scss';
import subHeaderStyle from './SubHeader.module.scss';
import { RegionsFilter } from './components/regions-filter/RegionsFilter';



export function SubHeader() {

    return (
        <div className={`${countriesStyle.subHeader} ${subHeaderStyle.subHeader}`}>
            <RegionsFilter />
        </div>
    )
}
