import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { RideHistoryPageRoutingModule } from './ride-history-routing.module';

import { RideHistoryPage } from './ride-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RideHistoryPageRoutingModule
  ],
  declarations: [RideHistoryPage]
})
export class RideHistoryPageModule {}
