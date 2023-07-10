import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsServices } from 'src/app/services/services.projects';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'angular-learning_1'; 
  // products: IProduct[] = data
  // products: IProduct[] = []
  // products$: Observable<IProduct[]>
  loading = false
  term = ''

  constructor(
    public productsService: ProductsServices,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void{
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false )
    // )
    this.productsService.getAll().subscribe(() => {
      // console.log(products)
      // this.products = products
      this.loading = false
    })
  }
}
