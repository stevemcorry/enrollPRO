import { Component } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import {ViewController, Events, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
  providers: [ GetService, PostService ]

})
export class AddContact{
    constructor(public viewCtrl: ViewController, public getService: GetService, public postService: PostService, public events: Events, public alert: AlertController){}
    contact = {
        first_name: '',
        last_name: '',
        phone: '',
        email: ''
    };
    slides = {
        
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    addContact(contact){
        if(contact.first_name && contact.last_name && contact.phone && contact.email){
            this.getService.getStorage().then(key => {
                this.postService.addContact(key, this.contact).subscribe(() => {
                    this.getContacts();
                    this.contact = {
                        first_name: '',
                        last_name: '',
                        phone: '',
                        email: ''
                    };
                    this.events.publish('contactAdded');
                    this.dismiss();
                });
            })
        } else {
            let alert = this.alert.create({
                title: 'Please Fill Out all the Info',
                buttons: ['OK']
            })
            alert.present();
        }
    }
    getContacts = () => {
    this.getService.getStorage().then(key => {
      this.getService.getContacts(key).subscribe(res => {
      });
    })
  }

}