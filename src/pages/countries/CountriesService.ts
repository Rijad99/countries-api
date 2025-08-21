import { Country } from './countries-types/CountriesTypes.ts';

class CountriesServiceImpl {
  private baseUrl = 'https://restcountries.com/v3.1';

  getAllCountries = async (): Promise<Country[]> => {
    const response = await fetch(
      `${this.baseUrl}/all?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders`
    );

    return await response.json();
  };

  getCountriesByRegion = async (region: string): Promise<Country[]> => {
    const response = await fetch(`${this.baseUrl}/region/${region}`);

    return await response.json();
  };

  getCountryByName = async (country: string): Promise<Country[]> => {
    const response = await fetch(`${this.baseUrl}/name/${country}`);

    return await response.json();
  };
}

export const CountriesService = new CountriesServiceImpl();
