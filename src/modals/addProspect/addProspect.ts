import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-Prospect',
  templateUrl: 'addProspect.html',
  providers: [ GetService ]

})
export class AddProspect implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams,){
    this.prospect = params.get('prospect');
    }

    prospect;

    log(){
        console.log(this.prospect);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit(){
        this.log();
    }
    
}