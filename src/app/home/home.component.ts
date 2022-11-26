import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FoundProduct } from 'src/types';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  prod: any;
  productsList: FoundProduct[]= []
  constructor(private http : HttpClient){}

  ngOnInit(): void {
      this.http.get('http://localhost:8080/api/product').subscribe(response => {

        this.prod = response
        this.productsList = this.prod.foundProducts
        console.log(this.productsList)
      })
  }
}
