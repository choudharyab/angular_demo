import { Component } from '@angular/core';
import { ServiceControllerService } from './service-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Demo Project';
  todaydate;
  
  constructor(private servicecontroller:ServiceControllerService){}
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];


   myclickFunction(event)
   {

    alert("button is clicked");
    console.log(event);

   }


   changemonth(event)
   {
     alert("click has been made on option");

   }

   ngOnInit()
   {
     this.todaydate=this.servicecontroller.showTodayDate();

   }
}
