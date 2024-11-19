import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnlockingPage } from './unlocking.page';

const routes: Routes = [
  {
    path: '',
    component: UnlockingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnlockingPageRoutingModule {}
