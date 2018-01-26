import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';//the main app component
import { UserComponent }  from './components/user.component';
import { NavbarComponent }  from './components/navbar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UserComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
