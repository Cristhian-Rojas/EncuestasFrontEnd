import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserJwt } from './UserJwt';
import { Observable } from 'rxjs';
import { LoginUsuario } from './LoginUsuario';
import { AppSettings } from './../../app.settings';


const authURL = AppSettings.API_ENDPOINT + 'users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario:LoginUsuario): Observable<UserJwt>{
    return this.httpClient.post<UserJwt>(authURL+'/login', loginUsuario);
  }

}
