import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMenuPage } from './mainmenu';

@NgModule({
  declarations: [
    MainMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMenuPage),
  ],
})
export class MainmenuPageModule {}
