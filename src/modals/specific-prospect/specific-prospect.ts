import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { PutService } from '../../services/putService';
import { AddAction} from '../../modals/add-action/add-action'
import { ModalController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-specific-prospect',
  templateUrl: 'specific-prospect.html',
  providers: [ GetService, PostService, PutService ]

})
export class SpecificProspect implements OnInit{
    constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public putService: PutService, public events: Events){
    this.prospect = params.get('prospect');
    }
    prospect;
    contact = {
        phone: "",
        pipeline_position: {name: ""},

    };
    actions;
    complete = 0;
    action;
    width = 0;
    leftBox = false;
    rightBox = true;

    getSpecificContact(){
        this.getService.getStorage().then(key => {
            this.getService.getSpecificContact(key, this.prospect.id).subscribe(res => {
                this.contact = res;
                this.actions = res.actions;
             });
        })
    }
    addAction(){
        let modal = this.modalCtrl.create(AddAction, {contact: this.contact});
        modal.present();
    }
    swipeEvent(e){
        this.width++
    }
    displayCheck(){
        if(this.width%2 === 0){
            return "none"
        }else {
            return "flex"
        }
    }
    icon(x){
        if(x === 'Text Message'){
            return "chatbubbles"
        } else if(x === 'Email'){
            return "mail"
        }
    }
    advancePipe(x){
        let pipe = x.pipeline_position.id + 1;
        let send = {
            pipeline_position: pipe
        }        
        this.getService.getStorage().then(key => {
            this.putService.advancePipe(key, x.id, send).subscribe(res => {
                this.width++;
                this.getSpecificContact();
                this.events.publish('pipeAdvance');
             });
        })
    }
    activeCheck(x){
        if(x === 0){
            return ""
        } else {
            return "lightgreen"
        }
    }
    historyShow(){
        this.complete = 1;
    }
    actionsShow(){
        this.complete = 0;
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit(){
        this.getSpecificContact();
    }
    
}