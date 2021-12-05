import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    public productosSvc: ProductosService
  ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((params: any) => {
      this.productosSvc.buscarProducto(params['termino']);
    });
  }

}
