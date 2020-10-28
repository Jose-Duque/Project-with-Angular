import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  //atributo = 'Testando'
  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routerUrl:'/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);

    console.log('Navegou para outra página !')
  }


  // fazerAlgo(): void {
  //   console.log(this.atributo);
  // } 

}
