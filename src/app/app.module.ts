import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScoreCardPage } from '../pages/score-card/score-card';
import { LoginPage } from '../pages/login/login';
import { TestPage } from '../pages/test/test';

import { ChartProvider } from '../providers/chart/chart';
import { ScoreCardDataProvider } from '../providers/score-card-data/score-card-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScoreCardPage,
    LoginPage,
    TestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScoreCardPage,
    LoginPage,
    TestPage
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
