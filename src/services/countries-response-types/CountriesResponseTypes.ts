export interface CountryNames {
    common: string,
    nativeName?: string,
    official?: string
}

export interface Flags {
    png: string,
    svg: string
}

export interface Country {
    flags: Flags
    name: CountryNames
    population: number,
    region: string,
    capital: string
}
