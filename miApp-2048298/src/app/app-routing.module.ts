import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { CameraComponent } from './components/camera/camera.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path: 'listaAlumnos',
    component: ListaAlumnosComponent
  },
  {
    path: 'productoDetalle/:id',
    component: ProductoDetalleComponent
 },
  {
    path: 'Camera',
    component: CameraComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
