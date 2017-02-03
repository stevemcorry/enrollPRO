import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController, NavController} from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { EmailLoginModal } from '../email-login/emailLogin';
import { FBLoginModal } from '../fb-login/fbLogin';
import { GoogleLoginModal } from '../google-login/googleLogin';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ GetService ]
})
export class LoginModal implements OnInit{
    constructor(public viewCtrl: ViewController, public modalCtrl: ModalController, public navCtrl: NavController, public platform: Platform, public params: NavParams, public getService: GetService){
    }
    token;
    emailLogin() {
       let modal = this.modalCtrl.create(EmailLoginModal);
    modal.present();
    }
    fbLogin() {
       let modal = this.modalCtrl.create(FBLoginModal);
    modal.present();
    }
    googleLogin() {
       let modal = this.modalCtrl.create(GoogleLoginModal);
    modal.present();
    }
    

    ngOnInit(){
    }
    
}