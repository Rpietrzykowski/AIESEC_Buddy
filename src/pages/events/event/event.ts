import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EventMapPage} from "./event-map/event-map";


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})

export class EventPage implements OnInit{
  data: any;

  constructor(public navParam: NavParams, public navCtrlInst: NavController) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }

  onGoTo(data: any) {
      this.navCtrlInst.push(EventMapPage, {"data": data});
  }
}
