import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PutService } from '../../services/putService'
import { ViewController, Events, ModalController } from 'ionic-angular';

@Component({
    selector: 'page-edit-contact',
    templateUrl: 'edit-contact.html',
    providers: [GetService, PutService]
})

export class EditContact implements OnInit {

    constructor(public viewCtrl: ViewController, public getService: GetService, public putService: PutService){}
    
    dismiss(){
        this.viewCtrl.dismiss();
    }

    ngOnInit(){
    }
}