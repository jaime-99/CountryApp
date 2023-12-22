
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable, catchError, of, tap } from "rxjs";
import { Country } from "../interfaces/countries";
import { CountryByCountry } from "../interfaces/ByCountries";


@Injectable({providedIn:'root'})

export class CountriesNameService {

  private url:string = 'https://restcountries.com/v3.1'

  constructor (private httpClient:HttpClient) {}



  searchCapital(term:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.url}/capital/${term}`)
    .pipe(
      catchError(()=>of([]) )
    );
  }
  searchCountry(term:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.url}/name/${term}`)
    .pipe(
      catchError(()=>of([]) )
    );
  }
  searchRegion(term:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.url}/region/${term}`)
    .pipe(
      catchError(()=>of([]) )
    );
  }

}

