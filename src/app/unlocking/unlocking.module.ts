import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnlockingPageRoutingModule } from './unlocking-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { UnlockingPage } from './unlocking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    UnlockingPageRoutingModule
  ],
  declarations: [UnlockingPage]
})
export class UnlockingPageModule {}
