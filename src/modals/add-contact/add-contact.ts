import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
  providers: [ GetService, PostService ]

})
export class AddContact implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService){}
    contact = {
        first_name: '',
        last_name: '',
        phone: '',
        email: ''
    };
    dismiss() {
        this.viewCtrl.dismiss();
    }
    addContact(contact){
        this.getService.getStorage().then(key => {
            this.postService.addContact(key, this.contact).subscribe(res => {
                console.log('contacts', res)
            })
        })
    }
    getContacts = () => {
    this.getService.getStorage().then(key => {
      this.getService.getContacts(key).subscribe(res => {
        console.log( 'contacts', res);
      });
    })
  }

    ngOnInit(){
    }
    
}