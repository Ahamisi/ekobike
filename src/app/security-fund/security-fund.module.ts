import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityFundPageRoutingModule } from './security-fund-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { SecurityFundPage } from './security-fund.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SecurityFundPageRoutingModule
  ],
  declarations: [SecurityFundPage]
})
export class SecurityFundPageModule {}
