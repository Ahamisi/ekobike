import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';
import { MyEvent } from 'src/services/myevent.services';
import { Constants } from 'src/models/contants.models';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-theme-language-selction',
  templateUrl: './theme-language-selction.page.html',
  styleUrls: ['./theme-language-selction.page.scss'],
})
export class ThemeLanguageSelctionPage implements OnInit {
  defaultLanguageCode;
  languages: Array<{ code: string, name: string }>;
  darkModeStatus: string | boolean;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private myEvent: MyEvent) { }

  ngOnInit() {
    this.defaultLanguageCode = this.config.availableLanguages[0].code;
    this.darkModeStatus = Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK;
    this.languages = this.config.availableLanguages;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }

  onLanguageClick(language) {
    this.defaultLanguageCode = language.code;
  }

  languageConfirm() {
    window.localStorage.setItem(Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    this.myEvent.setLanguageData(this.defaultLanguageCode);
  }

  onDarkMode(event) {
    let isDarkTheme = event.detail.checked;
    document.body.setAttribute('class', isDarkTheme ? 'dark-theme' : 'light-theme');
    Helper.seThemeMode(isDarkTheme ? Constants.THEME_MODE_DARK : Constants.THEME_MODE_LIGHT);
  }
}
