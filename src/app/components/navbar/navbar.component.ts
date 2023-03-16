import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private cookieService: CookieService) { }

  exit(){
    this.cookieService.delete('TOKEN');
    this.cookieService.delete('EMAIL');
    window.location.reload();
  }

}
