import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController, NavController} from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-fb-login',
  templateUrl: 'fbLogin.html',
  providers: [ GetService ]
})
export class FBLoginModal implements OnInit{
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