import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./shared/pages/homePage/homePage.component";
import { AboutPageComponent } from "./shared/pages/aboutPage/aboutPage.component";
import { ContactComponent } from "./shared/pages/contact/contact.component";

const routes : Routes = [
  {
    path: '',
    component:HomePageComponent,
  },
  {
    path: 'about',
    component:AboutPageComponent,
  },
  {
    path: 'contact',
    component:ContactComponent,
  },
  {
    path:'**',
    redirectTo:'home'
  }

];


@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule

  ]

})

export  class routingModule {}
