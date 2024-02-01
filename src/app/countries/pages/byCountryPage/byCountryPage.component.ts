import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountriesNameService } from '../../services/countires.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-country-page',

  templateUrl: './byCountryPage.component.html',
  styleUrls: ['./byCountryPage.component.css'],
})
export class ByCountryPageComponent {
  public countries:Country[] = []
  public isLoading:boolean = false;

  constructor ( private countriesService:CountriesNameService) {}


  searchByCountry(term:string){
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe(res=>{
      this.countries = res
      this.isLoading = false;
    })
  }


}
