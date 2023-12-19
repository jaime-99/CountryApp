import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/byCapitalPage/byCapitalPage.component';
import { ByRegionPageComponent } from './pages/byRegionPage/byRegionPage.component';
import { ByCountryPageComponent } from './pages/byCountryPage/byCountryPage.component';
import { CountryPageComponent } from './pages/CountryPage/CountryPage.component';

const routes:Routes = [
  {
    path:'by-capital',
    component:ByCapitalPageComponent
  },
  {
    path:'by-country',
    component:ByCountryPageComponent
  },
  {
    path:'by-region',
    component:ByRegionPageComponent
  },
  {
    path:'by/:id',
    component:CountryPageComponent
  },
  {
  path:'**',
  redirectTo:'by-capital'
  }
]


@NgModule({

  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class countriesRoutingModule { }
