// React
import { useContext, useState } from "react";

// Components
import Select from "../../../../../components/select/Select";

// Types
import { Option } from "../../../../../components/select/components/options/Options.types";

//  Styles
import regionsFilterSelectStyle from './RegionsFilter.module.scss';

// Services
import { getCountriesByRegion } from "../../../../../services/CountriesService";

// Contexts
import { CountriesContext } from "../../../../../context/CountriesContext";



const regions: Option[] = [
    {
        id: 0,
        value: 'Africa'
    },
    {
        id: 1,
        value: 'Americas'
    },
    {
        id: 2,
        value: 'Asia'
    },
    {
        id: 3,
        value: 'Europe'
    },
    {
        id: 4,
        value: 'Oceania'
    }
]



export function RegionsFilter() {
    const [selectedRegion, setSelectedRegion] = useState<Option | null>(null);

    const { setCountries } = useContext(CountriesContext);

    const handleCountriesUpdateByRegion = (option: Option) => {
        setSelectedRegion(option);

        getCountriesByRegion(option.value.toLowerCase())
            .then(data => {
                setCountries(data)
            })
            .catch(error => console.log(error));
    }

    return (
        <Select additionalClasses={regionsFilterSelectStyle.regionsFilterSelect} placeholder="Filter by Region" selectedOption={selectedRegion} options={regions} onOptionChange={handleCountriesUpdateByRegion} />
    )
}
