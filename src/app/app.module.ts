import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Device } from '@ionic-native/device';
import { NativeStorage } from '@ionic-native/native-storage';
import { MediaCapture } from '@ionic-native/media-capture';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EyeProvider } from '../providers/eye/eye';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    NativeStorage,
    MediaCapture, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EyeProvider
  ]
})
export class AppModule {}
