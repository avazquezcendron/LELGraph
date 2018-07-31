import { LelsComponent } from './lels.component';
import { LelStatsComponent } from '../lel-stats/lel-stats.component';
import { LelEditComponent } from '../lel-edit/lel-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SimboloEditComponent } from '../simbolo-edit/simbolo-edit.component';
import { LelListComponent } from './list/lel-list.component';
import { ImpactoEditComponent } from '../impacto-edit/impacto-edit.component';

const lelsRoutes: Routes = [
  {
    path: 'lels-home',
    component: LelsComponent
  },
  {
    path: 'lels',
    component: LelListComponent
  },
  {
    path: 'lels/:id/stats',
    component: LelStatsComponent
  },
  {
    path: 'lels/:id/:op',
    component: LelEditComponent
  },
  {
    path: 'lels/:id/:op/simbolo/:sbId/:sbOp',
    component: SimboloEditComponent
  },
  {
    path: 'lels/:id/:op/impacto/:sbId/:sbOp',
    component: ImpactoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(lelsRoutes)],
  exports: [RouterModule]
})
export class LelsRoutingModule {}
