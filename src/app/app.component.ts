
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsServices } from './services/services.projects';
import { Observable, tap } from 'rxjs';
// import { products as data} from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-learning_1'; 
  // products: IProduct[] = data
  // products: IProduct[] = []
  products$: Observable<IProduct[]>
  loading = false

  constructor(private productsService: ProductsServices) {

  }

  ngOnInit(): void{
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false )
    )
    // this.productsService.getAll().subscribe(products => {
    //   // console.log(products)
    //   this.products = products
    //   this.loading = false
    // })
  }
}
