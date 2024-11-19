import { Component, OnInit } from '@angular/core';
import { MyEvent } from 'src/services/myevent.services';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  countries = new Array<any>();
  constructor(private myEvent: MyEvent, private route: Router, private navCtrl: NavController) {
    this.myEvent.getCountries().subscribe(res => this.countries = res);
  }

  ngOnInit() {
  }

  continue() {
    this.route.navigate(['./sign-up']);
  }
  home() {
    this.navCtrl.navigateRoot(['./home']);
  }
}
