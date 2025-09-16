// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import subHeaderStyle from './SubHeader.module.scss';

// Components
import { RegionsFilter } from './components/regions-filter/RegionsFilter';
import { SearchInput } from './components/search-input/SearchInput';
import { ChangeEvent } from 'react';

interface SubHeaderProps {
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SubHeader({ searchValue, onChange }: SubHeaderProps) {
  return (
    <div className={`${countriesStyle.subHeader} ${subHeaderStyle.subHeader}`}>
      <SearchInput searchValue={searchValue} onChange={onChange} />
      <RegionsFilter />
    </div>
  );
}
