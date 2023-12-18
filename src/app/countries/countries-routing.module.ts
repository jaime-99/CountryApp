import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/byCapitalPage/byCapitalPage.component';
import { ByRegionPageComponent } from './pages/byRegionPage/byRegionPage.component';
import { ByCountryPageComponent } from './pages/byCountryPage/byCountryPage.component';

const routes:Routes = [
  {
    path:'by-capital',
    component:ByCapitalPageComponent
  },
  {
    path:'by-Country',
    component:ByCountryPageComponent
  },
  {
    path:'by-Region',
    component:ByRegionPageComponent
  },

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class countriesRoutingModule { }
