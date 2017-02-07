import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-action',
  templateUrl: 'add-action.html',
  providers: [ GetService, PostService ]

})
export class AddAction implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService){
        this.contact = params.get('contact');
    }
    contact;
    action;
    newAction = {
        action_type: "",
        contact: "",
        due_date: "",
        notes: ""
    };
    addAction(){
        console.log(this.contact.id,'id')
        this.newAction.contact = this.contact.id
        if(this.newAction.due_date && this.newAction.notes && this.newAction.action_type){
            console.log('anything');
            this.getService.getStorage().then(key => {
                this.postService.addAction(key, this.newAction).subscribe((res) => {
                    console.log('action added')
                });
            })
        }
    }
    
    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit(){
    console.log(this.contact);
    }
    
}