import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';//the main app component
import { UserComponent }  from './components/user.component';
import { NavbarComponent }  from './components/navbar.component';
import { StarwarsComponent }  from './components/starwars.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UserComponent, NavbarComponent, StarwarsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
