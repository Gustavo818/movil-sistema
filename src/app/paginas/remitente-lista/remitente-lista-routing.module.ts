import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemitenteListaPage } from './remitente-lista.page';

const routes: Routes = [
  {
    path: '',
    component: RemitenteListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemitenteListaPageRoutingModule {}
