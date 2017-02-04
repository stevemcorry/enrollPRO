import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-specific-prospect',
  templateUrl: 'specific-prospect.html',
  providers: [ GetService ]

})
export class SpecificProspect implements OnInit{
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