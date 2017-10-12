import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuddyPage} from '../buddy/buddy'

/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

      onGoToBuddy(){
      this.navCtrl.push(BuddyPage);
  }

}
