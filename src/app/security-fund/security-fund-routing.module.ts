import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityFundPage } from './security-fund.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityFundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityFundPageRoutingModule {}
