import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer archivo JSON:
    this.httpClient.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    // Leer archivo JSON:
    this.httpClient.get('https://angular-html-64a19-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.equipo = resp;
      });
  }
}
