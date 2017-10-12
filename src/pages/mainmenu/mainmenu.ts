import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuddyPage} from '../buddy/buddy'
import {HomePage} from "../home/home";
import {PlacesPage} from "../places/places";
import {TimetablePage} from "../timetable/timetable";
import {EventsPage} from "../events/events";
import {SchoolPage} from "../school/school";

/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToBuddy(){
      this.navCtrl.push(BuddyPage);
  }

  onGoToHome(){
      this.navCtrl.push(HomePage);
  }

  onGoToPlaces(){
      this.navCtrl.push(PlacesPage);
  }

  onGoToTimetable(){
      this.navCtrl.push(TimetablePage);
  }

  onGoToEvents(){
      this.navCtrl.push(EventsPage);
  }

  onGoToSchool(){
      this.navCtrl.push(SchoolPage);
  }

}
