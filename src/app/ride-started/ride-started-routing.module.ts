import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideStartedPage } from './ride-started.page';

const routes: Routes = [
  {
    path: '',
    component: RideStartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideStartedPageRoutingModule {}
