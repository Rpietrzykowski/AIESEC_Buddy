import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {PlacePage} from "./place/place";

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage implements OnInit{
  data: any;

  constructor(public navParam: NavParams, public navCtrlInst: NavController) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }

    onGoTo(data: any) {
      this.navCtrlInst.push(PlacePage, {"data": data});
  }
}
