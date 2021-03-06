import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {CallNumber} from "@ionic-native/call-number";
import {HomeMapPage} from "../home/home-map/home-map";

@Component({
  selector: 'page-school',
  templateUrl: 'school.html'
})
export class SchoolPage implements OnInit {
  data: any;

  constructor(public navParam: NavParams, public callNumberInst: CallNumber, public navCtrlInst: NavController) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }

  launchDialer(number: string) {
    this.callNumberInst.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  onGoTo(data: any) {
    this.navCtrlInst.push(HomeMapPage, {"data": data});
  }
}
