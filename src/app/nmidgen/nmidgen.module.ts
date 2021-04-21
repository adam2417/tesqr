import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NmidgenPageRoutingModule } from './nmidgen-routing.module';

import { NmidgenPage } from './nmidgen.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NmidgenPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NmidgenPage]
})
export class NmidgenPageModule {}
