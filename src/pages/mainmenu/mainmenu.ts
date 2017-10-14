import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuddyPage} from '../buddy/buddy'
import {HomePage} from "../home/home";
import {PlacesPage} from "../places/places";
import {TimetablePage} from "../timetable/timetable";
import {EventsPage} from "../events/events";
import {SchoolPage} from "../school/school";


@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  onGoToBuddy(name: string, surname: string, buddy: string){
      this.navCtrl.push(BuddyPage,
        {
          userName:  name,
          userSurname: surname,
          userTitle: buddy
        });
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
