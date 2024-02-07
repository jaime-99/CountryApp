import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css'],
})
export class SearchBoxComponent implements OnInit {
 
  //tipo especial de observable
  private debouncer :Subject<string> = new Subject<string>();
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value=>{
      this.ondebounce.emit(value);
    });

  }

  @Input() public placeholder:string = ''

  @Input() public initalValue:string = '';

  @ViewChild('txtInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Output() onValue: EventEmitter<string> = new EventEmitter<string>();
  //este es para que escriba y emita el evento
  @Output() ondebounce: EventEmitter<string> = new EventEmitter<string>();


  emitirEvento(value:string): void {
    this.onValue.emit(value); 
  }

  onkeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }
  






}
