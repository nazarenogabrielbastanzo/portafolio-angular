import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { environment } from '../../environments/environment';

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
    this.httpClient.get(environment.equipoUrl)
      .subscribe((resp: any) => {
        this.equipo = resp;
      });
  }
}
