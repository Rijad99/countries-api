export const getAllCountries = async () => {
    
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    return data;
}

export const getCountriesByRegion = async (region: string) => {

    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await response.json();

    return data;
}
