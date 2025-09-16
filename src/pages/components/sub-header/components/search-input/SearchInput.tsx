// Components
import { Input } from '../../../../../components/input/Input.tsx';

// Icons
import { icons } from '../../../../../common/icons/icons.ts';

// Styles
import searchInputStyle from './SearchInput.module.scss';
import { ChangeEvent } from 'react';

export interface SearchInputProps {
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ searchValue, onChange }: SearchInputProps) {
  return (
    <Input
      id="countries-search-input"
      placeholder="Search for a country..."
      value={searchValue}
      icon={icons.searchIcon}
      additionalClasses={searchInputStyle.searchInput}
      onChange={onChange}
    />
  );
}
