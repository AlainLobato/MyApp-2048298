import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CameraComponent } from './components/camera/camera.component';

@NgModule({
  declarations: [AppComponent, 
    ListaAlumnosComponent, 
    ProductosComponent, 
    ProductoDetalleComponent, 
    FooterComponent,
    HeaderComponent,
    CameraComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
