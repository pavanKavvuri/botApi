import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyChatPage } from './my-chat';

@NgModule({
  declarations: [
    MyChatPage,
  ],
  imports: [
    IonicPageModule.forChild(MyChatPage),
  ],
  exports: [
    MyChatPage
  ]
})
export class MyChatPageModule {}
