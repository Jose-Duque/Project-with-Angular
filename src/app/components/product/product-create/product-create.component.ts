import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  }
  constructor(private productService: ProductService,private router: Router) {
    
  }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.ShowMassage("Produto salvo!");
      this.router.navigate(['/products']);
    });
      
  }
  
  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

}


