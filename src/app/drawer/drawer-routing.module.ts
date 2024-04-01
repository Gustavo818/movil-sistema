import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawerPage } from './drawer.page';

const routes: Routes = [
  {
    path: '',
    component: DrawerPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },


      {
        path: 'remitente/:id',///envios/ordenes/ordenes.module
        loadChildren: () => import('../paginas/remitente-formulario/remitente-formulario.module').then( m => m.RemitenteFormularioPageModule)
      },

      {
        path: 'remitente-lista',///envios/ordenes/ordenes.module
        loadChildren: () => import('../paginas/remitente-lista/remitente-lista.module').then( m => m.RemitenteListaPageModule)
      },

      
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawerPageRoutingModule {}
