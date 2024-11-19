import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideEndedPage } from './ride-ended.page';

const routes: Routes = [
  {
    path: '',
    component: RideEndedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideEndedPageRoutingModule {}
