import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsrPage } from './msr';

@NgModule({
  declarations: [
    MsrPage,
  ],
  imports: [
    IonicPageModule.forChild(MsrPage),
  ],
  exports: [
    MsrPage
  ]
})
export class MsrPageModule {}
