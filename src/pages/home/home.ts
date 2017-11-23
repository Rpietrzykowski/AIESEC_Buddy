import {Component, OnInit} from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  data: any;

  constructor(public navParam: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }
}


