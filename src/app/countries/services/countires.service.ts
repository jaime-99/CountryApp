
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable, catchError, delay, map, of, tap } from "rxjs";
import { Country } from "../interfaces/countries";
import { cacheStore } from "../interfaces/cache.interface";


@Injectable({providedIn:'root'})

export class CountriesNameService {

  private url:string = 'https://restcountries.com/v3.1'
  public cacheStore:cacheStore = {
    byCapital: {term: '', countries:[]},
    ByCountries: {term: '', countries:[]},
    byRegion: {term: '', countries:[]},
  }

  constructor (private httpClient:HttpClient) {
    this.loadFromLocalStorage()
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore') !)
  }


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
    .pipe(
      tap(countries => {this.cacheStore.byCapital = {term:term,countries:countries}}),
      tap (( ) =>this.saveToLocalStorage()),

    );
  }
  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.url}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => {this.cacheStore.ByCountries = {term:term,countries:countries}}),
      tap (( ) =>this.saveToLocalStorage()),

    )
    
  }
  searchRegion(term:string):Observable<Country[]>{
    const url = `${this.url}/region/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => {this.cacheStore.byRegion = {term:term,countries:countries}}),
      tap (( ) =>this.saveToLocalStorage()),

    )
    
  }

}

