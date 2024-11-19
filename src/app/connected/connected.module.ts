import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
  
import { ConnectedPageRoutingModule } from './connected-routing.module';

import { ConnectedPage } from './connected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ConnectedPageRoutingModule
  ],
  declarations: [ConnectedPage]
})
export class ConnectedPageModule {}
