import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/postService';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController, NavController} from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-email-login',
  templateUrl: 'emailLogin.html',
  providers: [ PostService, GetService]
})
export class EmailLoginModal implements OnInit{
    fullname;
    constructor(public viewCtrl: ViewController, public navCtrl: NavController, public platform: Platform, public params: NavParams, public postService: PostService, public gettService: GetService){
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    login() {
        if(this.user.username && this.user.password && this.fullname) {
            this.store();
            this.navCtrl.setRoot(TabsPage);
        }
        else {
            alert('Please Fill out all the information')
        }
    }
    public user = {
    "grant_type": "password",
    "client_id": "2",
    "client_secret": "FxeeeKA65iEFExJWm0l08O6MJua8MTOoxiWz2sPZ",
    "username": "",
    "password": "",
    "scope": ""
    }
    send(){
        this.postService.requestOAuth(this.user).subscribe(res=>{
            console.log(res);
        })
    }
    store(){
        this.postService.store(this.user);
    }
    ngOnInit(){
    }
}