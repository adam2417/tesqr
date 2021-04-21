import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenqrisPage } from './genqris.page';

const routes: Routes = [
  {
    path: '',
    component: GenqrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenqrisPageRoutingModule {}
