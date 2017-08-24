import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private memory: string;
  private memories: any[];

  private nativeStorage: NativeStorage;
  
  private camera: Camera;
  private cameraOptions: CameraOptions;

  constructor(navCtrl: NavController, nativeStorage: NativeStorage, camera: Camera) {
    this.nativeStorage = nativeStorage;
    
    this.camera = camera;
    this.cameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.ALLMEDIA
    }

    this.memories = [];
  }

  enter() {
    this.memories.push(this.memory);
    this.memory = '';
  }

  openCamera() {
    this.camera.getPicture(this.cameraOptions).then((data) => {
      console.log('success!');
    }, (err) => {
      console.log(err);
    });
  }

  mic() {};

}