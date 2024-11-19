import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-unlocking',
  templateUrl: './unlocking.page.html',
  styleUrls: ['./unlocking.page.scss'],
})
export class UnlockingPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() { 
    setTimeout(() => {
      this.connected();
    }, 2000)
  } 
  connected() {
    this.navCtrl.navigateRoot(['./connected']);
  }
}
