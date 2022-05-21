import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
    CartSubject = new Subject<any>()
    wishListSubject = new Subject<any>()
  search: any;


  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  // getWishListBooks(){
  //   return this.http.get<any>("https://bookcart.azurewebsites.net/api/Wishlist/525")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
}
