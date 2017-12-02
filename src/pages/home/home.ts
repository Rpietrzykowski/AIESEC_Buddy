import {Component, OnInit} from '@angular/core';
import { NavParams } from "ionic-angular";
import {CallNumber} from "@ionic-native/call-number";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  data: any;

  constructor(public navParam: NavParams, public callNumberInst: CallNumber) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }

    launchDialer(number: string) {
    this.callNumberInst.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
}


