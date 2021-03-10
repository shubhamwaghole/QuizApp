import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iquiz } from './quiz.interface';


@Injectable({
  providedIn: 'root'
})
export class DatasetService  {

  constructor(private httpclient:HttpClient) { }

  getData(): Observable<Iquiz[]>
  {
     return this.httpclient.get<Iquiz[]>("../../../assets/data/QnA.json");
  }
}
