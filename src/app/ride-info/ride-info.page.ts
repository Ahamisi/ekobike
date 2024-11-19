import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-ride-info',
  templateUrl: './ride-info.page.html',
  styleUrls: ['./ride-info.page.scss'],
})
export class RideInfoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.pop();
  }
}
