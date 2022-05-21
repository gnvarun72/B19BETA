import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productList:any;
  public cartItems:any[]=[]
  public wishListItems:any[]=[]



  constructor(private _homeService:HomeService) { }

  ngOnInit(): void {
    this._homeService.getProducts()
    .subscribe(res=>{
      this.productList=res;
    })

  }

  addToCart(item:any){
    let checkForNull = localStorage.getItem('myCart')
    if(checkForNull == null){
      let storageArray =[]
      storageArray.push(item)
      localStorage.setItem('myCart',JSON.stringify(storageArray))
    }
    else{
      let id = item
        let index = -1;
        this.cartItems.push(item)
        localStorage.setItem('myCart', JSON.stringify(this.cartItems))
       }
      this.cartNumberFunction()
      }
      addToWishList(item:any){
        let check = localStorage.getItem('myWishList')
        if(check == null){
          let storageArray = []
          storageArray.push(item)
          localStorage.setItem('myWishList',JSON.stringify(storageArray))
        }
        else{
          let id = item
          let index=-1;
          this.wishListItems.push(item)
          localStorage.setItem('myWishList',JSON.stringify(this.wishListItems))
        }
        this.wishListNumberFunction()
      }

      cartNumber: number = 0;
      cartNumberFunction(){
        let cartValue = JSON.parse(localStorage.getItem('myCart') ||'{}')
        this.cartNumber = cartValue.length
        this._homeService.CartSubject.next(this.cartNumber)
      }

      wishListNumber:number = 0;
      wishListNumberFunction(){
        let wishListValue = JSON.parse(localStorage.getItem('myWishList') ||'{}')
        this.wishListNumber = wishListValue.length
        this._homeService.wishListSubject.next(this.wishListNumber)
      }

}




