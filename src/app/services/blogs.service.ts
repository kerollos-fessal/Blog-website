import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private _http: HttpClient) { }

getBlogs():Observable<any>{
  return this._http.get('https://dev.to/api/articles')
}

}
