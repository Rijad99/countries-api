import { useState } from "react";
import Select from "../../../../../components/select/Select";
import { Option } from "../../../../../components/select/components/options/Options.types";
import regionsFilterSelectStyle from './RegionsFilter.module.scss';



const regions: Option[] = [
    {
        id: 0,
        value: 'Africa'
    },
    {
        id: 1,
        value: 'America'
    },
    {
        id: 2,
        value: 'Asia'
    },
    {
        id: 3,
        value: 'Europa'
    },
    {
        id: 4,
        value: 'Oceania'
    }
]

export function RegionsFilter() {
    const [selectedRegion, setSelectedRegion] = useState<Option | null>(null);

    const handleFilterChange = (option: Option) => {
        setSelectedRegion(option);
    }

    return (
        <Select additionalClasses={regionsFilterSelectStyle.regionsFilterSelect} placeholder="Filter by Region" selectedOption={selectedRegion} options={regions} onOptionChange={handleFilterChange} />
    )
}
