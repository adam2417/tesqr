import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenqrisPageRoutingModule } from './genqris-routing.module';

import { GenqrisPage } from './genqris.page';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GenqrisPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [GenqrisPage]
})
export class GenqrisPageModule {}
