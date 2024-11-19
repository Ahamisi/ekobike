import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { RideStartedPageRoutingModule } from './ride-started-routing.module';

import { RideStartedPage } from './ride-started.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RideStartedPageRoutingModule
  ],
  declarations: [RideStartedPage]
})
export class RideStartedPageModule { }
