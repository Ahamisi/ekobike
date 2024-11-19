import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
   
import { ReferAndEarnPageRoutingModule } from './refer-and-earn-routing.module';

import { ReferAndEarnPage } from './refer-and-earn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReferAndEarnPageRoutingModule
  ],
  declarations: [ReferAndEarnPage]
})
export class ReferAndEarnPageModule {}
