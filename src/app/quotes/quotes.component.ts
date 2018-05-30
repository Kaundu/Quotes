import { Component, OnInit } from '@angular/core';
import { Qoutes } from '../qoutes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes =  [
    new Qoutes ("Kosa","Time is the real enemy", "Kaisilius"),
    new Qoutes ("Muivs","Dread it,run from it....Destiny arrives","Thanos")
 ]

 addNewQuote(quote){
      this.quotes.push(quote)
  }
  like(i){
    this.quotes[i].upVotes+=1
  }
  dislike(i){
    this.quotes[i].downVotes+=1
  }
  quoteDelete(index){
   confirm("Do You want to Delete this Quote?")
    this.quotes.splice(index,1);
  }


  constructor() {

   }

  ngOnInit() {
  }

}
