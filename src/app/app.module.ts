import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {PlacesPage} from "../pages/places/places";
import {BuddyPage} from "../pages/buddy/buddy";
import {TimetablePage} from "../pages/timetable/timetable";
import {MainMenuPage} from "../pages/mainmenu/mainmenu";
import {EventsPage} from "../pages/events/events";
import {SchoolPage} from "../pages/school/school";
import {HttpModule} from "@angular/http";
import {EventPage} from "../pages/events/event/event";
import {CallNumber} from "@ionic-native/call-number";
import {PlacePage} from "../pages/places/place/place";
import {PlaceMapPageModule} from "../pages/places/place/place-map/place-map.module";
import {PlaceMapPage} from "../pages/places/place/place-map/place-map";
import {GoogleMaps} from "@ionic-native/google-maps";
import {HomeMapPage} from "../pages/home/home-map/home-map";
import {SchoolMapPage} from "../pages/school/school-map/school-map";
import {EventMapPage} from "../pages/events/event/event-map/event-map";
import {DataProvider} from '../providers/data/data';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

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
    SchoolPage,
    EventPage,
    PlacePage,
    PlaceMapPage,
    HomeMapPage,
    SchoolMapPage,
    EventMapPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
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
    SchoolPage,
    EventPage,
    PlacePage,
    PlaceMapPage,
    HomeMapPage,
    SchoolMapPage,
    EventMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AuthServiceProvider


  ]
})
export class AppModule {
}
