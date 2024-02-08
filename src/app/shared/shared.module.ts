import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SideBarComponent } from './components/ejemplo/sidebar.component';
import { routingModule } from '../app.rouitng.module';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactComponent,
    SideBarComponent,
    SearchBoxComponent,
    LoaderComponent
    
  ],
  imports: [
    CommonModule,
    // routingModule
    RouterModule, 

   ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactComponent,
    SearchBoxComponent,
    MatProgressSpinnerModule,
    LoaderComponent
  ]
})
export class SharedModule { }
