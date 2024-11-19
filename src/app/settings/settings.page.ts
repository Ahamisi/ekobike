import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';
import { MyEvent } from 'src/services/myevent.services';
import { Constants } from 'src/models/contants.models';
import { Helper } from 'src/models/helper.models';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  distance_unity: string = "Kilometer";
  defaultLanguageCode; 
  darkModeStatus: string;
  languages: Array<{ code: string, name: string }>;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private myEvent: MyEvent, private route: Router, private navCtrl: NavController) {
    this.defaultLanguageCode = config.availableLanguages[0].code;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }

  ngOnInit() {
    this.defaultLanguageCode = this.config.availableLanguages[0].code;
    this.darkModeStatus = (Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK).toString();
    this.languages = this.config.availableLanguages;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }

  languageConfirm() {
    this.myEvent.setLanguageData(this.defaultLanguageCode);
    window.localStorage.setItem(Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
  }

  onDarkMode(event) {
    let isDarkTheme = event.target.value == "true" ? true : false;
    document.body.setAttribute('class', isDarkTheme ? 'dark-theme' : 'light-theme');
    Helper.seThemeMode(isDarkTheme ? Constants.THEME_MODE_DARK : Constants.THEME_MODE_LIGHT);
  }

  termsConditions() {
    this.route.navigate(['./terms-conditions']);
  }
  privacyPolicy() {
    this.route.navigate(['./privacy-policy']);
  }
  signIn() {
    this.navCtrl.navigateRoot(['./sign-in']);
  }
}
