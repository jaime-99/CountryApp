import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css'],
})
export class SearchBoxComponent {

  @Input()public  placeholder:string = ''

  @ViewChild('txtInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Output() onValue: EventEmitter<string> = new EventEmitter<string>();


  emitirEvento(value:string): void {
    this.onValue.emit(value);
    //ejemplo


  }





}
