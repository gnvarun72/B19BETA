import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
  title = 'B19BETA';
  public searchKey:string=""
  public cartNumber :number = 0
  public wishListNumber : number =0




    constructor(private _homeService:HomeService){
    this._homeService.CartSubject
    .subscribe(res=>this.cartNumber=res)

    this._homeService.wishListSubject
    .subscribe(res=>this.wishListNumber=res)

  }

  ngOnInit() {
    this.cartItemFunction()
    this.wishListItemFunction()

  }

  cartItemFunction(){
    if(localStorage.getItem('myCart') !== null){
      let cartCount = JSON.parse(localStorage.getItem('myCart') ||'{}')
      this.cartNumber = cartCount.length
    }
  }
  wishListItemFunction(){
    if(localStorage.getItem('myWishList') !==null){
      let wishListCount = JSON.parse(localStorage.getItem('myWishList') ||'{}')
      this.wishListNumber = wishListCount
    }
  }


  onsearchClear(){
    this.searchKey=''

  }

  onSearch(event:any){
    this.searchKey = (event.target as HTMLInputElement).value;
    console.log(this.searchKey);
    this._homeService.search.next(this.searchKey);
  }



}




