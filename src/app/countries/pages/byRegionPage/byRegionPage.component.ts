import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountriesNameService } from '../../services/countires.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-region-page',

  templateUrl: './byRegionPage.component.html',
  styleUrls: ['./byRegionPage.component.css'],
})
export class ByRegionPageComponent implements OnInit {
  public countries:Country[] = []
  public regions:string[] = ['Africa','Americas', 'Asia', 'Europe','Oceania'];
  isLoading:boolean = false;

  public selectedRegion?:string;
  constructor ( private region:CountriesNameService) {}
  ngOnInit(): void {
    this.countries = this.region.cacheStore.byRegion.countries;
    this.selectedRegion = this.region.cacheStore.byRegion.term;
  }


  searchByRegion(region:string):void{
    this.isLoading = true;
    this.selectedRegion = region;

    this.region.searchRegion(region).subscribe((res)=>{
      this.countries = res;
      this.isLoading = false;
    })

  }



 }
