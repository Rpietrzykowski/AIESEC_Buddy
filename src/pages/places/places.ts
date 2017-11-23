import {Component, OnInit} from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage implements OnInit{
  data: any;

  constructor(public navParam: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }
}
