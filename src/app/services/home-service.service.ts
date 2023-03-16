import { CookieService } from 'ngx-cookie-service';
import { Brand } from './../models/brands.model';
import { Observable } from 'rxjs';
import { Polls } from './../models/polls.model';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './../../app.settings';
import { Injectable } from '@angular/core';

const registerURL = AppSettings.API_ENDPOINT + 'polls';
const getBrand = AppSettings.API_ENDPOINT + 'brands';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  headers = new Headers();
  constructor(private http: HttpClient, private cookieService: CookieService) {


  }

  registraForm(obj:Polls):Observable<any>{
    return this.http.post(registerURL, obj);
  }

  //utils
  listBrands():Observable<any>{
    return this.http.get<Brand[]>(getBrand);
  }

  //gmail: any = localStorage.getItem('EMAIL');

  getId(gmail:any):Observable<any>{
    return this.http.get(registerURL + '/find/' + gmail);

  }
}
