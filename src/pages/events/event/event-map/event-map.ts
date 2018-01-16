import {Component, ElementRef, ViewChild, OnInit} from "@angular/core/";
import {NavController, NavParams} from "ionic-angular";

declare var google: any;

@Component({
  selector: 'page-event-map',
  templateUrl: 'event-map.html'
})
export class EventMapPage implements OnInit {
  @ViewChild('map') mapRef: ElementRef;
  data: any;
  map: any;
  lat: any;
  long: any;


  constructor(public navCtrlInst: NavController, public navParamInst: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParamInst.get("data");
    this.lat = this.data.address.lattitude;
    this.long = this.data.address.longtitude;
    console.log(this.lat, this.long);
    this.loadMap(this.lat, this.long);
  }


  ionViewDidLoad(){
  }

  loadMap(lat, long) {
    //Location - Lat Long
    const location = new google.maps.LatLng(lat, long);

    //Map Options
    const options = {
      center: location,
      zoom: 16
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    })
  }
}