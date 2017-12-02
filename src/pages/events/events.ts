import {Component, OnInit} from '@angular/core';
import { NavParams, NavController } from "ionic-angular";
import {EventPage} from "./event/event";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage implements OnInit {
  data: any;

  constructor(public navParam: NavParams, public navCtrl: NavController) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }

  onGoTo(data: any) {
      this.navCtrl.push(EventPage, {"data": data});
  }
}
