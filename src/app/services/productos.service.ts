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
  productosFiltrado: Producto[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise<void>((resolve, reject) => {
      this.httpClient.get(environment.productosUrl)
      .subscribe((resp: any) => {

        this.productos = resp;

      },
      (error: any) => {
        // Actions on error

      },
      () => {
        this.cargando = false;
        resolve();
      });
    });


  }

  getProducto(id: string) {
    return this.httpClient.get(`https://angular-html-64a19-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // ejecutar despues de tener los productos
        // aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino: string) {

    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);

      }
    });
  }
}
