
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable, catchError, delay, map, of, tap } from "rxjs";
import { Country } from "../interfaces/countries";
import { CountryByCountry } from "../interfaces/ByCountries";


@Injectable({providedIn:'root'})

export class CountriesNameService {

  private url:string = 'https://restcountries.com/v3.1'

  constructor (private httpClient:HttpClient) {}


  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(  ( ) =>of([]) ),
      delay(2000),
    );
  }


  searchCountryByAlphaCode(code:string):Observable<Country | null>{

    return this.httpClient.get<Country[]>(`${this.url}/alpha/${code}`)
    .pipe(
      map(countries => countries.length>0 ? countries[0]:null),
      catchError(()=>of(null) )
    );
  }

  searchCapital(term:string):Observable<Country[]>{
    const url = `${this.url}/capital/${term}`;
    return this.getCountriesRequest(url)
  }
  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.url}/name/${term}`;
    return this.getCountriesRequest(url)
    
  }
  searchRegion(term:string):Observable<Country[]>{
    const url = `${this.url}/region/${term}`;
    return this.getCountriesRequest(url)
    
  }

}

