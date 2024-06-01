import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})
export class ProductoDetalleComponent  implements OnInit {

  constructor() { }

  ruta = inject(ActivatedRoute)
  consulta = inject(ConsultaService)

  ngOnInit() {
    this.realizarConsulta(this.idProducto);
  }

  idProducto: string = this.ruta.snapshot.params['id'];

  producto: any = {};

  realizarConsulta(idProducto: string): void{
    this.consulta.getProductoDetalle(this.idProducto).subscribe(res => {
      this.producto = res;
    })
  }

}
