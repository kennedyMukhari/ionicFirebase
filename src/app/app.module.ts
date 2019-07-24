import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import * as firebse from 'firebase'
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddhotelPage } from '../pages/addhotel/addhotel';
import { RoomsPage } from '../pages/rooms/rooms';

import { DetailsComponent } from '../components/details/details';
import { GalleryPage } from '../pages/gallery/gallery';
import { Camera } from '@ionic-native/camera';
import { BookingsPage } from '../pages/bookings/bookings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AddhotelPage,
    RoomsPage,
    DetailsComponent,
    GalleryPage,
    BookingsPage
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
    RegisterPage,
    AddhotelPage,
    RoomsPage,
    DetailsComponent,
    GalleryPage,
    BookingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
