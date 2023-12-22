import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountriesNameService } from '../../services/countires.service';
import { CountryByCountry } from '../../interfaces/ByCountries';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-country-page',

  templateUrl: './byCountryPage.component.html',
  styleUrls: ['./byCountryPage.component.css'],
})
export class ByCountryPageComponent {
  // public countries:CountryByCountry[] = []
  public countries:Country[] = []

  constructor ( private countriesService:CountriesNameService) {}


  searchByCountry(term:string){
    this.countriesService.searchCountry(term).subscribe(res=>{
      this.countries = res
    })
  }


}
