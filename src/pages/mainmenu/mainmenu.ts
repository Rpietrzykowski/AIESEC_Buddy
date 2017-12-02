import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuddyPage} from '../buddy/buddy'
import {HomePage} from "../home/home";
import {PlacesPage} from "../places/places";
import {TimetablePage} from "../timetable/timetable";
import {EventsPage} from "../events/events";
import {SchoolPage} from "../school/school";
import buddyFromDataFile  from "../../data/data_new";
import {DataProvider} from "../../providers/data/data";


@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainMenuPage implements OnInit{
  data: any[];

  ngOnInit(){
    this.data = buddyFromDataFile;
    this.getMessages()
  }

  constructor(public navCtrl: NavController, public dataProviderInst: DataProvider) {

  }

  getMessages(){
    this.dataProviderInst.getData().subscribe(data => console.log(data));
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
