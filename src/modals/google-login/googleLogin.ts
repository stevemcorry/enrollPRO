import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController, NavController} from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-google-login',
  templateUrl: 'googleLogin.html',
  providers: [ GetService ]
})
export class GoogleLoginModal implements OnInit{
    constructor(public viewCtrl: ViewController, public navCtrl: NavController, public platform: Platform, public params: NavParams,){
    }

    login() {
        this.navCtrl.setRoot(TabsPage);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
    }
    
}