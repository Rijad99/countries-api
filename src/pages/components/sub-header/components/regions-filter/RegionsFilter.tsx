// React

// Components
import Select from '../../../../../components/select/Select';

// Types
import { Option } from '../../../../../components/select/components/options/Options.types';

//  Styles
import regionsFilterSelectStyle from './RegionsFilter.module.scss';

const regions: Option[] = [
  {
    id: 0,
    value: 'Africa',
  },
  {
    id: 1,
    value: 'Americas',
  },
  {
    id: 2,
    value: 'Asia',
  },
  {
    id: 3,
    value: 'Europe',
  },
  {
    id: 4,
    value: 'Oceania',
  },
];

interface RegionsFilterProps {
  selectedRegion: Option | null;
  onRegionChange: (option: Option) => void;
}

export function RegionsFilter({ selectedRegion, onRegionChange }: RegionsFilterProps) {
  return (
    <Select
      additionalClasses={regionsFilterSelectStyle.regionsFilterSelect}
      placeholder="Filter by Region"
      selectedOption={selectedRegion}
      options={regions}
      onOptionChange={onRegionChange}
    />
  );
}
