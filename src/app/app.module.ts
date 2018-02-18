import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {ServiceControllerService} from './service-controller.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent
  ],


  imports: [
    BrowserModule,
    RouterModule.forRoot([

      {
        path:'',
        component:LoginComponent
      },

      {

       path:'user',
       component:UserComponent
      },
      
    ])
  ],

  providers: [ServiceControllerService],
  bootstrap: [AppComponent]
})
export class AppModule {

 

}
