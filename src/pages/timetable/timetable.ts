import {Component, OnInit} from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html'
})
export class TimetablePage implements OnInit{
  data: any;

  constructor(public navParam: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }
}
