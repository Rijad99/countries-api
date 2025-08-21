// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import subHeaderStyle from './SubHeader.module.scss';

// Components
import { RegionsFilter } from './components/regions-filter/RegionsFilter';
import { SearchInput } from './components/search-input/SearchInput';

export function SubHeader() {
  return (
    <div className={`${countriesStyle.subHeader} ${subHeaderStyle.subHeader}`}>
      <SearchInput />
      <RegionsFilter />
    </div>
  );
}
