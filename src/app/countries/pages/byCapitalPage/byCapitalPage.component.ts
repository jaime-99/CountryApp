import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountriesNameService } from '../../services/countires.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capital-page',

  templateUrl: './byCapitalPage.component.html',
  styleUrls: ['./byCapitalPage.component.css'],
})
export class ByCapitalPageComponent  implements OnInit{
  public capitales: Country[] = [];
  public isLoading:boolean = false
  public initialValue:string = '';

  constructor (private countriesService:CountriesNameService ) {}
  ngOnInit(): void {
    this.capitales = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term; 

  }

  searchByCapital(term:string):void{

    this.isLoading = true;
    this.countriesService.searchCapital(term)
    .subscribe(res=>{
      this.capitales= res;
      this.isLoading = false;
    });
  }





}
