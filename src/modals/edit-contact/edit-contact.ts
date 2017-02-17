import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PutService } from '../../services/putService'
import { ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-edit-contact',
    templateUrl: 'edit-contact.html',
    providers: [GetService, PutService]
})

export class EditContact implements OnInit {

    constructor(public viewCtrl: ViewController, public getService: GetService, public putService: PutService, public params: NavParams){
        this.contact = params.get('contact');
    }
    contact;
    editContact(){
        let contact = {
            first_name: this.contact.first_name,
            last_name: this.contact.last_name,
            email: this.contact.email,
            phone: this.contact.phone
        }
        this.getService.getStorage().then((key)=>{
            this.putService.editContact(key, this.contact.id, contact).subscribe(res =>{
                this.dismiss()
            })
        })
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
    }
}