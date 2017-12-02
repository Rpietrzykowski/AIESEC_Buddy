import {Component, ElementRef, ViewChild, OnInit} from "@angular/core/";
import {NavController, NavParams} from "ionic-angular";

declare var google: any;

@Component({
  selector: 'page-place-map',
  templateUrl: 'place-map.html'
})
export class PlaceMapPage implements OnInit {
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

  }


  ionViewDidLoad() {
    this.loadMap(this.lat, this.long);
  }

  loadMap(lat, long) {
    //Location - Lat Long
    const location = new google.maps.LatLng(lat, long);

    //Map Options
    const options = {
      center: location,
      zoom: 15
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
