import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController, NavController} from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ GetService ]
})
export class LoginModal implements OnInit{
    constructor(public viewCtrl: ViewController, public navCtrl: NavController, public platform: Platform, public params: NavParams,){
    //this.prospect = params.get('prospect');
    }

    prospect;

    log(){
        console.log(this.prospect);
    }

    dismiss() {
        this.navCtrl.setRoot(TabsPage);
    }

    ngOnInit(){
        this.log();
    }
    
}