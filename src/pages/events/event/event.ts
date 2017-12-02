import {Component, OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})

export class EventPage implements OnInit{
  data: any;

  constructor(public navParam: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }
}
