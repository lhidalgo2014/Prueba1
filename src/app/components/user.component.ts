import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <img src="logo-negro-01.png">
  <p>{{slogan}}</p>
  `,
})
export class UserComponent  {
  slogan = "marketing, música y web."
}
