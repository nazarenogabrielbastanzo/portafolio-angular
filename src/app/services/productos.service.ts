import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.httpClient.get(environment.productosUrl)
      .subscribe((resp: any) => {

        this.productos = resp;

      },
      (error: any) => {
        console.log(error);

      },
      () => {
        this.cargando = false;
      });
  }
}
