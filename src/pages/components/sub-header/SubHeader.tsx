// React
import { ChangeEvent } from 'react';

// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import subHeaderStyle from './SubHeader.module.scss';

// Components
import { RegionsFilter } from './components/regions-filter/RegionsFilter';
import { SearchInput } from './components/search-input/SearchInput';

// Types
import { Option } from '../../../components/select/components/options/Options.types.ts';
import { FilterReset } from './components/filter-reset/FilterReset.tsx';

interface SubHeaderProps {
  searchValue: string;
  selectedRegion: Option | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRegionChange: (option: Option) => void;
  handleFilterReset: () => void;
}

export function SubHeader({ searchValue, selectedRegion, onChange, onRegionChange, handleFilterReset }: SubHeaderProps) {
  return (
    <div className={`${countriesStyle.subHeader} ${subHeaderStyle.subHeader}`}>
      <div className={subHeaderStyle.leftPartButtons}>
        <SearchInput searchValue={searchValue} onChange={onChange} />
        <FilterReset handleFilterReset={handleFilterReset} />
      </div>
      <RegionsFilter selectedRegion={selectedRegion} onRegionChange={onRegionChange} />
    </div>
  );
}
