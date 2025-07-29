export const getAllCountries = async () => {
    
    const response = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders');
    const data = await response.json();

    return data;
}

export const getCountriesByRegion = async (region: string) => {

    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await response.json();

    return data;
}

export const getCountryByName = async (country: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await response.json();

    return data;
}
