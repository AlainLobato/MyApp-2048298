import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor() { }

  http = inject(HttpClient)

  getProductos() {    
    return this.http.get('https://fakestoreapi.com/products')
  }


  getProductoDetalle(id: string) {
    return this.http.get('https://fakestoreapi.com/products/'+ id)
  }
  
}
