import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
  providers: [ GetService ]

})
export class AddContact implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService){}
    
    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit(){
    }
    
}