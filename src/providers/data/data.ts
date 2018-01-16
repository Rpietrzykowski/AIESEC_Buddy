import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import {Observable} from "rxjs/Observable";


@Injectable()
export class DataProvider {

  private url: string = "https://serwer1787851.home.pl/apppics/json.php";

  constructor(public http: Http) {
  }

  getData(){
    return this.http.get(this.url)
      .map(this.extractData);
      //.catch(this.catchError);
  }

  private logResponse(res:Response){
    console.log(res);
  }

  private extractData(res:Response){
    return res.json();
  }

  getCrud(){
    return this.http.get(this.url)
      .map(this.extractCrud);
      //.catch(this.catchError);
  }

    private extractCrud(res:Response){
    return res.json()[0];
  }

  getAuthData(authCredentials: any) {
    //return this.http.post(this.url, authCredentials).map(this.extractData);
    return this.http.post(this.url, JSON.stringify(authCredentials));
  }

  // private catchError(error:Response | any){
  //   console.log(error);
  //   return Observable.throw(error.json().error || "Server Error");
  // }

}
