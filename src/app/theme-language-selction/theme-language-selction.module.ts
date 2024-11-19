import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { ThemeLanguageSelctionPageRoutingModule } from './theme-language-selction-routing.module';

import { ThemeLanguageSelctionPage } from './theme-language-selction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ThemeLanguageSelctionPageRoutingModule
  ],
  declarations: [ThemeLanguageSelctionPage]
})
export class ThemeLanguageSelctionPageModule { }
