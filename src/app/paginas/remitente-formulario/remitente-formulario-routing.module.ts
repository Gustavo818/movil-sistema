import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemitenteFormularioPage } from './remitente-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: RemitenteFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemitenteFormularioPageRoutingModule {}
