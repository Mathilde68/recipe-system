import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment";
import { Observable } from "rxjs";



@Injectable({providedIn: 'root'})
 export class APIService {
private http = inject(HttpClient);
 
private baseUrl: string = environment.apiBaseUrl;

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }


 
 }