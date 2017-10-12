import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { PlacesPage } from "../pages/places/places";
import { BuddyPage } from "../pages/buddy/buddy";
import { TimetablePage } from "../pages/timetable/timetable";
import { MainMenuPage } from "../pages/mainmenu/mainmenu";
import {EventsPage} from "../pages/events/events";
import {SchoolPage} from "../pages/school/school";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PlacesPage,
    BuddyPage,
    TimetablePage,
    MainMenuPage,
    EventsPage,
    SchoolPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PlacesPage,
    BuddyPage,
    TimetablePage,
    MainMenuPage,
    EventsPage,
    SchoolPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
