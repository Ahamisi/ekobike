import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { QrScanPageRoutingModule } from './qr-scan-routing.module';

import { QrScanPage } from './qr-scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    QrScanPageRoutingModule
  ],
  declarations: [QrScanPage]
})
export class QrScanPageModule { }
