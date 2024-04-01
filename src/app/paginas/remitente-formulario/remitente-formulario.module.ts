import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemitenteFormularioPageRoutingModule } from './remitente-formulario-routing.module';

import { RemitenteFormularioPage } from './remitente-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemitenteFormularioPageRoutingModule
  ],
  declarations: [RemitenteFormularioPage]
})
export class RemitenteFormularioPageModule {}
