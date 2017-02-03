import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetService } from '../../services/getService';
import { TabsPage } from '../tabs/tabs';
import { LoginModal } from '../../modals/login/login';

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
  providers: [ GetService ]
})
export class LoadingPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public getService: GetService) {}

  loginCheck(){
     this.getService.getStorage().then(res => {
      if(res){
        this.navCtrl.setRoot(TabsPage)
      } else {
        this.navCtrl.setRoot(LoginModal)
      }
     })
    }

  ngOnInit(){
    this.loginCheck();
  }

}
