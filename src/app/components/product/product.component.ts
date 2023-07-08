
import { Component, Input } from '@angular/core'
import { IProduct } from 'src/app/models/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  @Input() product: IProduct

  details = false
  // details: boolen = false // No need to write type because it is obviose 
}