import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  // Post
  postUsers(data: any) {
    return this.http.post<any>("http://localhost:3000/posts/", data)
    .pipe(map((resData: any)=>{
      return resData;
    }))
  }

  // Get
  getUsers() {
    return this.http.get<any>("http://localhost:3000/posts/")
    .pipe(map((resData: any)=>{
      return resData;
    }))
  }

  // Update
  updateUsers(data: any, id:number) {
    return this.http.put<any>("http://localhost:3000/posts/"+id, data)
    .pipe(map((resData: any)=>{
      return resData;
    }))
  }

  // Delete
  deleteUsers(id:number) {
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((resData: any)=>{
      return resData;
    }))
  }
}
