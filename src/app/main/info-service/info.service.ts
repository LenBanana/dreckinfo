import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../../../interfaces/info';
import { Observable } from 'rxjs';
import { baseUrl } from '../../../general/config';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Info> {
    return this.http.get<Info>(baseUrl + 'info');
  }
}
