import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { NativeStorage } from '@ionic-native/native-storage';
import { MediaCapture } from '@ionic-native/media-capture';
import { EyeProvider } from '../../providers/eye/eye';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private thought: string;
  private infinity: infinities[];

  constructor(private navCtrl: NavController, 
              private actionSheetCtrl: ActionSheetController, 
              private nativeStorage: NativeStorage, 
              private device: Device, 
              private mediaCapture: MediaCapture,
              private eye: EyeProvider) {

    this.infinity = [];
    this.thought = '';
  }

  enter() {
    if (this.thought != '') {
      let i: infinities = {
        type: 0, 
        date: getDate(), 
        value: this.thought
      }
      this.infinity.push(i);
    }
    
    this.thought = '';
  }

  openMedia() {
    this.actionSheetCtrl.create({
      enableBackdropDismiss: true,
      buttons: [
        {icon: 'md-close-circle', role: 'cancel'},
        {icon: 'md-camera', handler: this.eye.takePic},
        {icon: 'md-videocam', handler: null},
        {icon: 'md-microphone', handler: null}
      ]
    }).present();
  }
}

interface infinities {
  type: number, // 0 = text, 1 = picture, 2 = video, 3 = record
  date: string,
  value: any
}

function getDate(): any {
  let date = new Date();
  
  let minute: any = date.getMinutes();
  if (minute < 10)
    minute = '0' + minute;

  let hour: any = date.getHours();
  if (hour < 10)
    hour = '0' + hour;

  let day: any = date.getDate();
  if (day < 10)
  day = '0' + day;

  let month: any = date.getMonth() + 1;
  if (month < 10)
    month = '0' + month;

  let year = date.getFullYear();
  
  return year + '/' + month + '/' + day + '  ' + hour + ':' + minute;
}


