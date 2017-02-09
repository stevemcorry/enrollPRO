import { Component, OnInit } from '@angular/core';
import { GetService} from '../../services/getService';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
  providers: [ GetService ]
})
export class MorePage implements OnInit{

  constructor(public navCtrl: NavController, public getService: GetService) {
  }
  name;
  getName(){
    this.getService.getStorageName().then(res => {
      this.name = res;
    })
  }

  ngOnInit(){
    this.getName();
  }
}