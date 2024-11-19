import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SecurityFundPage } from '../security-fund/security-fund.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  toggleClass = false;
  currDiv: string = 'enableLocation';
  BikeStandInfo: string = 'enableLocation';
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
    setTimeout(() => {
      this.SecurityFund();
    }, 2000)
  }
  show_scooters() {
    this.toggleClass = !this.toggleClass;
  }

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  showBikeStandInfo(divVal: string) {
    this.BikeStandInfo = divVal;
  }
  qrScan() {
    this.route.navigate(['./qr-scan']);
  }
  unlocking() {
    this.route.navigate(['./unlocking']);
  }

  SecurityFund() {
    this.modalController.create({ component: SecurityFundPage }).then((modalElement) => modalElement.present());
  }
}
