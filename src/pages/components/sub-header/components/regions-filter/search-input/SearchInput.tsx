// Components
import { Input } from '../../../../../../components/input/Input';

// Icons
import { icons } from '../../../../../../common/icons/icons';

// Styles
import searchInputStyle from './SearchInput.module.scss';

export interface SearchInputProps {
  value?: string;
}

export function SearchInput({ value }: SearchInputProps) {
  return (
    <Input
      id="countries-search-input"
      placeholder="Search for a country..."
      value={value}
      icon={icons.searchIcon}
      additionalClasses={searchInputStyle.searchInput}
    />
  );
}
