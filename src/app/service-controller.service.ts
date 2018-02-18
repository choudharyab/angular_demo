import { Injectable } from '@angular/core';

@Injectable()
export class ServiceControllerService {

  constructor() { }


  showTodayDate() {
      let ndate = new Date();
      return ndate;
   }

}
