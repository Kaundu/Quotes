import { Component } from '@angular/core';
import { Qoutes } from './qoutes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   quotes =  [
     new Qoutes ("Kosa","Time is the real enemy" ,"Kaisilius"),
     new Qoutes ("Muivs","Dread it,run from it....Destiny arrives","Thanos")
  ]
}
