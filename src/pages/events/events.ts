import {Component, OnInit} from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage implements OnInit{
  data: any;

  constructor(public navParam: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }
}
