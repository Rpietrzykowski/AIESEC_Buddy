import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PlaceMapPage} from "./place-map/place-map";


@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})

export class PlacePage implements OnInit{
  data: any;

  constructor(public navParam: NavParams,public navCtrlInst: NavController) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");

  }

  onGoTo(data: any) {
    this.navCtrlInst.push(PlaceMapPage, {"data": data});
  }
}
