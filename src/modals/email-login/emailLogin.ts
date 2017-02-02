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
    constructor(public viewCtrl: ViewController, public navCtrl: NavController, public platform: Platform, public params: NavParams, public postService: PostService, public gettService: GetService){
    }

    login() {
        this.navCtrl.setRoot(TabsPage);
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    public user = {
    "grant_type": "password",
    "client_id": "2",
    "client_secret": "FxeeeKA65iEFExJWm0l08O6MJua8MTOoxiWz2sPZ",
    "username": "bob@gmail.com",
    "password": "111111",
    "scope": ""
    }
    public newUser;
    toURL(){
        this.newUser = encodeURIComponent(JSON.stringify(this.user))
    }
    send(){
        console.log(this.newUser);
        this.postService.requestOAuth(this.newUser).subscribe(res=>{
            console.log(res);
        })
    }
    

    get(){
        this.gettService.getContacts().subscribe(res => {
            console.log(res);
        })
    }


    ngOnInit(){
        this.toURL()
    }

}