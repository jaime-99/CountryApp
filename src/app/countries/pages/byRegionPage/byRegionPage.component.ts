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
  isLoading:boolean = false;

  constructor ( private region:CountriesNameService) {}


  searchByRegion(term:string):void{
    this.isLoading = true;
    this.region.searchRegion(term).subscribe((res)=>{
      this.countries = res;
      this.isLoading = false;
    });

  }



 }
