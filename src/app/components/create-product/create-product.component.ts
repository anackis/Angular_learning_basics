import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalService } from 'src/app/services/modal.service';
import { ProductsServices } from 'src/app/services/services.projects';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html'
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productsService: ProductsServices,
    private modalService: ModalService
    ) {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }


  ngOnInit(): void {
  }

  submit() {
    // console.log(this.title)
    // console.log(this.form.value); 
    this.productsService.created( {
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 5
      }
  }).subscribe(() => {
    this.modalService.close()
  })
  }

}
