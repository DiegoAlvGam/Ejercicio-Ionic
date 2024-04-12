import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
})
export class ListaProductosPage implements OnInit {
  
  products: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.dataService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  addToCart(product: any) {
    this.dataService.addToCart(product);
  }
}
