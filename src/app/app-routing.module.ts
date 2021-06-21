import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

const ROUTES: Routes = [
  { path: 'home', component: PortafolioComponent }, // Para que dirija al componente principal cuando no se coloca nada luego de la ruta 
  { path: 'about', component: AboutComponent }, // Cuando se coloca, luego de la ruta, 'about', dirije al about component
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // Cuando se coloca cualquier otra cosa ('**'), redirija al componente principal
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
