import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
  <!-- navbar-fixed-top topnav -->
    <nav class="navbar navbar-default navbar-fixed-top topnav">

        <!-- topnav -->
        <div class="container topnav">

            <!-- Logo -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                  <span class="ico ico-burger-menu" title="Menu">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </span>
                </button>
                <a href="#" class="navbar-brand"></a>
            </div>

            <!-- Menu Items -->
            <div class="collapse navbar-collapse" id="mainNavBar">
                <ul class="nav navbar-nav navbar-left">
                  <li class="right"><a href="#">Inicio</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="right"><a href="#">Portafolio</a></li>
                    <li class="right"><a href="#">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
  `,
})
export class NavbarComponent  {

}
