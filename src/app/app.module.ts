import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScoreCardPage } from '../pages/score-card/score-card';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';
import { ChatUsersPage } from '../pages/chat-users/chat-users';

import { GroupSelectionProvider } from '../providers/group-selection/group-selection';
import { ChartDataProvider } from '../providers/chart-data/chart-data';
import { ChatUsersProvider } from '../providers/chat-users/chat-users';

import { CapitalizePipe } from '../pipes/capitalize/capitalize';
import { KeyUpdatesComponent } from '../components/key-updates/key-updates';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScoreCardPage,
    LoginPage,
    ChatPage,
    ChatUsersPage,
    CapitalizePipe,
    KeyUpdatesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScoreCardPage,
    LoginPage,
    ChatPage,
    ChatUsersPage,
    KeyUpdatesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GroupSelectionProvider,
    ChartDataProvider,
    ChatUsersProvider
  ]
})
export class AppModule { }
