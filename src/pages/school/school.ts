import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-school',
  templateUrl: 'school.html'
})
export class SchoolPage implements OnInit{
  data: any;

  constructor(public navParam: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParam.get("data");
  }
}
