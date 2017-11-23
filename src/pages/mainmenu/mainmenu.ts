import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuddyPage} from '../buddy/buddy'
import {HomePage} from "../home/home";
import {PlacesPage} from "../places/places";
import {TimetablePage} from "../timetable/timetable";
import {EventsPage} from "../events/events";
import {SchoolPage} from "../school/school";
import buddyFromDataFile  from "../../data/data_new";


@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainMenuPage implements OnInit{
  // buddyData: {name: string, description: string, picture: string, items: MenuModel[]}[];
  data: any[];

  ngOnInit(){
    this.data = buddyFromDataFile;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  onGoTo(page:string, data: any){
    if (page == 'id_buddies') {
      this.navCtrl.push(BuddyPage, {"data": data});
    }

    else if(page == 'id_home'){
      this.navCtrl.push(HomePage, {"data": data});
    }
    else if(page == 'id_school'){
      this.navCtrl.push(SchoolPage, {"data": data});
    }
    else if(page == 'id_timetable'){
      this.navCtrl.push(TimetablePage, {"data": data});
    }
    else if(page == 'id_events'){
      this.navCtrl.push(EventsPage, {"data": data});
    }
    else if(page == 'id_places'){
      this.navCtrl.push(PlacesPage, {"data": data});
    }
  }

}
