import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesNameService } from '../../services/countires.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',

  templateUrl: './CountryPage.component.html',
  styleUrls: ['./CountryPage.component.css'],
})
export class CountryPageComponent implements OnInit{

  constructor (private activatedRouter:ActivatedRoute, private countriesService: CountriesNameService, private router:Router) { }
  ngOnInit(): void {

    this.activatedRouter.params.pipe(
      switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id) )
    )
    .subscribe((country)=>{

      if(!country){
        return this.router.navigateByUrl('')
      }
      return;

    })
  }






 }
