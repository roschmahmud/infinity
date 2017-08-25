import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { NativeStorage } from '@ionic-native/native-storage';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture';
import { Keyboard } from '@ionic-native/keyboard';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private thought: string;
  private infinity: infinities[];

  private actionSheetCtrl: ActionSheetController;

  private nativeStorage: NativeStorage;
  private mediaCapture: MediaCapture;
  private keyboard: Keyboard;

  constructor(navCtrl: NavController, actionSheetCtrl: ActionSheetController, nativeStorage: NativeStorage, mediaCapture: MediaCapture, keyboard: Keyboard) {
    this.infinity = [];
    this.thought = '';

    this.actionSheetCtrl = actionSheetCtrl;

    this.nativeStorage = nativeStorage;
    this.mediaCapture = mediaCapture;
    
    this.keyboard = keyboard;
    this.keyboard.hideKeyboardAccessoryBar(true);
    this.keyboard.disableScroll(true);
  }

  enter() {
    this.keyboard.close();

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
        {icon: 'md-camera', handler: this.takePic},
        {icon: 'md-videocam', handler: this.takeVid},
        {icon: 'md-microphone', handler: this.recordVoice}
      ]
    }).present();
  }

  takePic() {
    this.mediaCapture.captureImage().then(
      (data: MediaFile[]) => {
        let i: infinities = {
          type: 1,
          date: getDate(),
          value: '<img src="' + data[0].fullPath + '">'
        };
        this.infinity.push(i);
      },
      (err: CaptureError) => console.log(err)
    );
  };
  takeVid() {};
  recordVoice() {};

  showKeyboard() {
    this.keyboard.show();
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


