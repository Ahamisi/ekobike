import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-ride-started',
  templateUrl: './ride-started.page.html',
  styleUrls: ['./ride-started.page.scss'],
})
export class RideStartedPage implements OnInit {
  toggleClass = false;
  currDiv: string = 'ride_info';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  ridePuse() {
    this.toggleClass = !this.toggleClass;
  }

  rideEnded() {
    this.navCtrl.navigateRoot(['./ride-ended']);
  }

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
}
