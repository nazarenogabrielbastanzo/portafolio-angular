import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-decripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto!: ProductoDescripcion;
  id!: string;
  cargando = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    public productosSvc: ProductosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {

      this.productosSvc.getProducto(params['id'])
        .subscribe((resp: any) => {
          this.id = params['id'];
          this.producto = resp;
        },
        (error: any) => {
          // Actions on error
        },
        () => {
          this.cargando = false;
        });

    });
  }

}
