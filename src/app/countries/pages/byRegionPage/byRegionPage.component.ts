import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountriesNameService } from '../../services/countires.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-region-page',

  templateUrl: './byRegionPage.component.html',
  styleUrls: ['./byRegionPage.component.css'],
})
export class ByRegionPageComponent {
  public countries:Country[] = []
  public regions:string[] = ['Africa','Americas', 'Asia', 'Europe','Oceania'];
  isLoading:boolean = false;

  public selectedRegion?:string;
  constructor ( private region:CountriesNameService) {}


  searchByRegion(region:string):void{
    this.isLoading = true;
    this.selectedRegion = region;

    this.region.searchRegion(region).subscribe((res)=>{
      this.countries = res;
      this.isLoading = false;
    })

  }



 }
