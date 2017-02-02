import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController, NavController} from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-email-login',
  templateUrl: 'emailLogin.html',
  providers: [ GetService ]
})
export class EmailLoginModal implements OnInit{
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