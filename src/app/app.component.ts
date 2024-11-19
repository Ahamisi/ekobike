import { Component, OnInit, Inject } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { MyEvent } from 'src/services/myevent.services';
import { Constants } from 'src/models/contants.models';
import { ModalController } from '@ionic/angular';
import { BuyappalertPage } from '../app/buyappalert/buyappalert.page';
import { VtPopupPage } from './vt-popup/vt-popup.page';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rtlSide = "left";
  rtlSideMenu = "start";
  showSideMenu = false;
  selectedIndex: any;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private platform: Platform, private navCtrl: NavController,
    private splashScreen: SplashScreen, private statusBar: StatusBar, private modalController: ModalController,
    private translate: TranslateService, private myEvent: MyEvent, public alertController: AlertController) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
  }

  initializeApp() {
    if (this.config.demoMode && this.platform.is('cordova') && !window.localStorage.getItem(Constants.KEY_IS_DEMO_MODE)) {
      window.localStorage.setItem(Constants.KEY_IS_DEMO_MODE, "true");
      this.language();
      setTimeout(() => this.presentModal(), 30000);
    } else {
      this.navCtrl.navigateRoot(['./']);
    }
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#000000');
      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
      setTimeout(() => this.splashScreen.hide(), 3000);
      this.darkModeSetting();
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    this.showSideMenu = false;
    switch (lang) {
      case 'iw':
      case 'ar':
        this.rtlSide = "rtl";
        this.rtlSideMenu = "end";
        break;
      default:
        this.rtlSide = "ltr";
        this.rtlSideMenu = "start";
        break;
    }
    setTimeout(() => this.showSideMenu = true, 100);
  }

  my_profile() { 
    this.navCtrl.navigateRoot(['./my-profile']);
  }
  home() {
    this.navCtrl.navigateRoot(['./home']);
  }
  wallet() {
    this.navCtrl.navigateRoot(['./wallet']);
  }
  rideHistory() {
    this.navCtrl.navigateRoot(['./ride-history']);
  }
  referAndEarn() {
    this.navCtrl.navigateRoot(['./refer-and-earn']);
  }
  faq() {
    this.navCtrl.navigateRoot(['./faq']);
  }
  settings() {
    this.navCtrl.navigateRoot(['./settings']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }

  language(): void {
    this.navCtrl.navigateRoot(['./theme-language-selction']);
  }

  developed_by() {
    window.open("https://opuslab.works/", '_system', 'location=no');
  }

  buyappalert() {
    this.modalController
      .create({ component: BuyappalertPage })
      .then(modalElement => {
        modalElement.present()
      })
  }
  darkModeSetting() {
    document.body.setAttribute('class', (Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK ? 'dark-theme' : 'light-theme'));
  }
}
