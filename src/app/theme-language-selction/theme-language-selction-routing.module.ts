import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeLanguageSelctionPage } from './theme-language-selction.page';

const routes: Routes = [
  {
    path: '',
    component: ThemeLanguageSelctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeLanguageSelctionPageRoutingModule {}
