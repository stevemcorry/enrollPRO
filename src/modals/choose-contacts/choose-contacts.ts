import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/postService';
import { GetService } from '../../services/getService';
import { SMS } from 'ionic-native';
import { ModalController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-choose-contacts',
  templateUrl: 'choose-contacts.html',
  providers: [ GetService, PostService ]

})
export class ChooseContacts implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public modalCtrl: ModalController, public postService: PostService, public events: Events){
        this.data = params.get('data');
        console.log(this.data, 'data')
    }
    data;
    chosen = [];
    contacts;
    search;
    getContacts(){
        this.getService.getStorage().then(key => {
            this.getService.getContacts(key).subscribe((res)=>{
                this.contacts = res;
            })
        })
    }
    getContactInfo(id){
        this.getService.getStorage().then(key => {
            this.getService.getSpecificContact(key, id).subscribe((res)=>{
                if(this.chosen.indexOf(res) == -1){
                    this.chosen.push(res);
                    console.log(this.chosen)
                } else {
                    alert('already in')
                }
            })
        })
    }
    sendText(){
        //SMS.send(this.phone, 'Whats up?')
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
        this.getContacts();
    }
    
}