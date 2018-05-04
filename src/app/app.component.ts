import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import Group from '../models/group';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MyChatPage } from '../pages/my-chat/my-chat';
// import { ChatUsersPage } from '../pages/chat-users/chat-users';
import { MsrPage } from '../pages/msr/msr';
import { GroupSelectionProvider } from '../providers/group-selection/group-selection';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = MyChatPage;
  rootPage: any = LoginPage;
 // rootPage: any = HomePage;
//rootPage: any = MsrPage;


  selectedGroupValue: string;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public app: App,
    public groupSelectionService: GroupSelectionProvider) {
    platform.ready().then(() => {
      //statusBar.styleDefault();
      statusBar.hide();
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

