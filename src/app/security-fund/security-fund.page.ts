import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-security-fund',
  templateUrl: './security-fund.page.html',
  styleUrls: ['./security-fund.page.scss'],
})
export class SecurityFundPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalController.dismiss();
  }
}
