import { Observable } from 'rxjs';
import { register } from './../models/register.model';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './../../app.settings';
import { Injectable } from '@angular/core';

const registerURL = AppSettings.API_ENDPOINT + 'users' + '/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  public register(register: register): Observable<register>{
    return this.httpClient.post<register>(registerURL, register);
  }
}
