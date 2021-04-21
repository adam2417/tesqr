import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nmidgen',
    pathMatch: 'full'
  },
  {
    path: 'genqris',
    loadChildren: () => import('./genqris/genqris.module').then( m => m.GenqrisPageModule)
  },
  {
    path: 'generatedqr',
    loadChildren: () => import('./generatedqr/generatedqr.module').then( m => m.GeneratedqrPageModule)
  },
  {
    path: 'nmidgen',
    loadChildren: () => import('./nmidgen/nmidgen.module').then( m => m.NmidgenPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
