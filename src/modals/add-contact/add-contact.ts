import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { PipelinePage } from '../../pages/pipeline/pipeline';
import { ModalController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
  providers: [ GetService, PostService ]

})
export class AddContact implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public events: Events){}
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
        }
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