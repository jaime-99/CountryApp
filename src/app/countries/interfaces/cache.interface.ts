import { Country } from "./countries";

export interface cacheStore{
    byCapital:TermCountries;
    ByCountries:TermCountries;
    byRegion:TermCountries;

}

export interface TermCountries {
    term:string;
    countries:Country[]
}