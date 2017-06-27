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

import { ChartProvider } from '../providers/chart/chart';
import { ScoreCardDataProvider } from '../providers/score-card-data/score-card-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScoreCardPage,
    LoginPage
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
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ChartProvider,
    ScoreCardDataProvider
  ]
})
export class AppModule { }
