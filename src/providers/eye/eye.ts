import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MediaCapture } from '@ionic-native/media-capture';
import 'rxjs/add/operator/map';

/*
  Generated class for the EyeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EyeProvider {

  constructor(public http: Http, private mediaCapture: MediaCapture) {}

  takePic(): void {
    console.log('rofl');
  }

}
