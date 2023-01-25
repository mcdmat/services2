import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) { }
  public getCocktails(): Observable<any> {
    return this.http.get<any>("assets/cocktails.json");
  }
}
