import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-connected',
  templateUrl: './connected.page.html',
  styleUrls: ['./connected.page.scss'],
})
export class ConnectedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  rideStarted() {
    this.navCtrl.navigateRoot(['./ride-started']);
  }
}
