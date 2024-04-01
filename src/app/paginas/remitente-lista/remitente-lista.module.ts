import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemitenteListaPageRoutingModule } from './remitente-lista-routing.module';

import { RemitenteListaPage } from './remitente-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemitenteListaPageRoutingModule
  ],
  declarations: [RemitenteListaPage]
})
export class RemitenteListaPageModule {}
