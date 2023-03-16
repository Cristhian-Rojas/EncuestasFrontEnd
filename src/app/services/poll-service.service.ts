import { CookieService } from 'ngx-cookie-service';
import { Brand } from './../models/brands.model';
import { Observable } from 'rxjs';
import { Polls } from './../models/polls.model';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './../../app.settings';
import { Injectable } from '@angular/core';

const Poll = AppSettings.API_ENDPOINT + 'polls';

@Injectable({
  providedIn: 'root'
})
export class PollServiecService {

  headers = new Headers();
  constructor(private http: HttpClient, private cookieService: CookieService) {


  }


  listPolls():Observable<any>{
    return this.http.get<Brand[]>(Poll);
  }

  elimina(id:number):Observable<any>{
    return this.http.delete(Poll + '/' + id);
  }

}
