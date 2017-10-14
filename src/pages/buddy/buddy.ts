import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";


@Component({
  selector: 'page-buddy',
  templateUrl: 'buddy.html',
})
export class BuddyPage implements OnInit {
  name: string;
  surname: string;
  title: string;

  constructor(public parameters: NavParams, public navCrtl: NavController) {
  }


  ngOnInit() {
    this.name = this.parameters.get('userName');
    this.surname = this.parameters.get('userSurname');
    this.title = this.parameters.get('userTitle');
  }

  onGoBack() {
    //this.navCrtl.pop();
    this.navCrtl.popToRoot();
  }
}



