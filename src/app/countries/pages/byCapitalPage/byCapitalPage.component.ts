import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',

  templateUrl: './byCapitalPage.component.html',
  styleUrls: ['./byCapitalPage.component.css'],
})
export class ByCapitalPageComponent { 

  searchByCapital(term:string){

    console.log({term})
    


  }


}
