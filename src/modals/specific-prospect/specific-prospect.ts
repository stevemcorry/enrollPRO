import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-specific-prospect',
  templateUrl: 'specific-prospect.html',
  providers: [ GetService ]

})
export class SpecificProspect implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService){
    this.prospect = params.get('prospect');
    }
    prospect;
    contact = {
        phone: "",
        pipeline_position: {name: ""},

    };

    getSpecificContact(){
        this.getService.getStorage().then(key => {
      this.getService.getSpecificContact(key, this.prospect.id).subscribe(res => {
          this.contact = res;
          console.log(this.contact);
      });
    })
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit(){
        this.getSpecificContact();
    }
    
}