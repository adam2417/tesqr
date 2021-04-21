import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NmidgenPage } from './nmidgen.page';

const routes: Routes = [
  {
    path: '',
    component: NmidgenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NmidgenPageRoutingModule {}
