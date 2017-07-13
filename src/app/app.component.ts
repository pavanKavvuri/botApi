import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import Group from '../models/group';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TestPage } from '../pages/test/test';

import { GroupSelectionProvider } from '../providers/group-selection/group-selection';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  // rootPage: any = LoginPage;

  selectedGroupValue: string;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public app: App,
    public groupSelectionService: GroupSelectionProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.selectedGroupValue = this.groupSelectionService.selectedGroup.value;

  }

  radioChanges() {
    // console.log('MENU -> ', this.selectedGroupValue);
    this.groupSelectionService.setGroup(this.selectedGroupValue);
  }

  logout() {
    const root = this.app.getRootNav();
    root.setRoot(LoginPage);
  }
}

