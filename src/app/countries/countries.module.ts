import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/byCapitalPage/byCapitalPage.component';
import { ByCountryPageComponent } from './pages/byCountryPage/byCountryPage.component';
import { ByRegionPageComponent } from './pages/byRegionPage/byRegionPage.component';
import { CountryPageComponent } from './pages/CountryPage/CountryPage.component';



@NgModule({
  declarations: [ByCapitalPageComponent,ByCountryPageComponent,ByRegionPageComponent,CountryPageComponent],
  imports: [
    CommonModule
  ]
})
export class CountriesModule { }
