import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolMapPage } from './school-map';

@NgModule({
  declarations: [
    SchoolMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolMapPage),
  ],
})
export class SchoolMapPageModule {}
