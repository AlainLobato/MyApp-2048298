import { Component, OnInit, inject } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  constructor() { }

  consulta = inject(ConsultaService)

  ngOnInit() {
    this.obtenerProductos();
  }

  productos: any = [];

  obtenerProductos() : void {
    this.consulta.getProductos().subscribe(res => {
      this.productos = res;
      console.log(res);
    })
  }
}
