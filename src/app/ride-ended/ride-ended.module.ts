import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { RideEndedPageRoutingModule } from './ride-ended-routing.module';

import { RideEndedPage } from './ride-ended.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RideEndedPageRoutingModule
  ],
  declarations: [RideEndedPage]
})
export class RideEndedPageModule {}
