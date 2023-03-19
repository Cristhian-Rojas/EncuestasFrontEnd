import { Router } from '@angular/router';
import { LoginUsuario } from './../../authService/LoginUsuario';
import { LoginService } from './../../authService/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLogged = false;
  loginUsuario: LoginUsuario = {};


  constructor(private loginService: LoginService, private cookieService: CookieService, private router: Router) { }



  onLogin(): any {

    this.loginService.login(this.loginUsuario).subscribe(

      (data:any) => {
        this.cookieService.set('TOKEN', data.token);
        //this.cookieService.set('EMAIL', data.email);
        localStorage.setItem('email', data.email);

        this.isLogged = true;
        this.router.navigate(['home']);
      }
    );

  }


  ngOnInit() {
  }

}
