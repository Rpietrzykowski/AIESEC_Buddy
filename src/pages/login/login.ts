import {Component, OnInit} from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {MainMenuPage} from "../mainmenu/mainmenu";
import {DataProvider} from "../../providers/data/data";
import {Http, Response} from "@angular/http";
//import {DataProvider} from "../../providers/data/data";
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { login: "", password: "" };


  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public httpInst: Http, public dataProviderInst: DataProvider) { }

  public login() {
    this.showLoading();
    // this.auth.login(this.registerCredentials).subscribe(allowed => {
    //   allowed = true;
    //   if (allowed) {
    //     this.nav.push(MainMenuPage);
    //   } else {
    //     this.showError("Access Denied");
    //   }
    // }
    console.log(this.registerCredentials);
    this.dataProviderInst.getAuthData(this.registerCredentials).subscribe(buddyData => {
      // buddyData = true;
      if (buddyData) {
        this.nav.push(MainMenuPage, {"data": buddyData.json()});
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Wrong Crudentials',
      subTitle: 'Provided crudentials are unvaild. Please try again.',
      buttons: ['Try Again']
    });
    alert.present(prompt);
  }

}
