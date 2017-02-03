import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, NavController, ModalController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginModal } from '../modals/login/login';
import { LoadingPage } from '../pages/loading/loading'


@Component({
  templateUrl: 'app.html',
  providers: []
})
export class MyApp implements OnInit{
rootPage = LoadingPage;

  constructor(public platform: Platform, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  // hideStyle = false;

  // login = () => {
  //   if(this.hideStyle) {
  //     return "none";
  //   } else {
  //     return "";
  //   }
  // }
  // openModal() {
  //   let modal = this.modalCtrl.create(LoginModal);
  //   modal.present();
  //   this.hideStyle = true;
  // }



  ngOnInit(){
  }

}
