import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PrivateComponent,
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}