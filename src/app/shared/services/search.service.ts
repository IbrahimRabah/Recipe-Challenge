import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchKeyword: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchRecipes: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  searchList = new BehaviorSubject<any>('');
  constructor(private httpClient:HttpClient) { }
  searchForRecipes(query:string,offset:number = 0):Observable<any>{
    let url =`${this.baseUrl}/recipes/complexSearch?apiKey=${this.apiKey}&query=${query}&offset=${offset}`;
    return this.httpClient.get<any>(url);
  }
}
