import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountriesNameService } from '../../services/countires.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-country-page',

  templateUrl: './byCountryPage.component.html',
  styleUrls: ['./byCountryPage.component.css'],
})
export class ByCountryPageComponent implements OnInit {
  public countries:Country[] = []
  public isLoading:boolean = false;
  public initialValue:string = ''
  
  constructor ( private countriesService:CountriesNameService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.ByCountries.countries;
    this.initialValue = this.countriesService.cacheStore.ByCountries.term;
  }


  searchByCountry(term:string){
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe(res=>{
      this.countries = res
      this.isLoading = false;
    })
  }


}
