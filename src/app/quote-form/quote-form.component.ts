import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})

export class QuoteFormComponent implements OnInit {
  newQuote = new Qoutes("","","")

  @Output() addQuote=new EventEmitter<Qoutes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
