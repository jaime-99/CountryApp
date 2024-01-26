import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountriesNameService } from '../../services/countires.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capital-page',

  templateUrl: './byCapitalPage.component.html',
  styleUrls: ['./byCapitalPage.component.css'],
})
export class ByCapitalPageComponent {
  public capitales: Country[] = [];
  public isLoading:boolean = false

  constructor (private countries:CountriesNameService ) {}

  searchByCapital(term:string):void{

    this.isLoading = true;
    this.countries.searchCapital(term)
    .subscribe(res=>{
      this.capitales= res;
      this.isLoading = false;
    });
  }





}
