import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/postService';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-choose-contacts',
  templateUrl: 'choose-contacts.html',
  providers: [ GetService, PostService ]

})
export class ChooseContacts implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public modalCtrl: ModalController, public postService: PostService, public events: Events){
        this.option = params.get('option');
    }
    option;
    contacts;
    search;
    getContacts(){
        this.getService.getStorage().then(key => {
            this.getService.getContacts(key).subscribe((res)=>{
                this.contacts = res;
            })
        })
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
        this.getContacts();
    }
    
}