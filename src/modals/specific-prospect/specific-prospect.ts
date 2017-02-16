import { Component, OnInit, ViewChild } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { PutService } from '../../services/putService';
import { AddAction} from '../../modals/add-action/add-action';
import { EditContact } from '../edit-contact/edit-contact';
import { SpecificAction } from '../../modals/specific-action/specific-action';
import { ModalController, Platform, NavParams, ViewController, Events, Slides, NavController} from 'ionic-angular';

@Component({
  selector: 'page-specific-prospect',
  templateUrl: 'specific-prospect.html',
  providers: [ GetService, PostService, PutService ]

})
export class SpecificProspect implements OnInit{
    @ViewChild('choosePipe') choosePipe: Slides;

    constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public putService: PutService, public events: Events, public navCtrl: NavController){
    this.prospect = params.get('prospect');
    this.slides = params.get('slides');
    this.events.subscribe('actionAdded', () => {
        this.getSpecificContact();
    });
    }
    action;
    actions;
    contact = {
        phone: "",
        pipeline_position: {name: "", id: 0},
        id: 0,
        first_name: '',
        last_name: ''

    };
    complete = 0;
    prospect;
    leftBox = false;
    rightBox = true;
    slides;
    sliderOptions ={
        pager:true
    }
    width = 0;

    getSpecificContact(){
        this.getService.getStorage().then(key => {
            this.getService.getSpecificContact(key, this.prospect.id).subscribe(res => {
                let pipe = res.pipeline_position.id + 1;
                this.contact = res;
                this.actions = res.actions;
                if(this.contact.pipeline_position.id > 6){
                    this.choosePipe.slideTo(this.contact.pipeline_position.id -1, 2000)
                } else {
                    this.choosePipe.slideTo(this.contact.pipeline_position.id - 1, 1000);
                }           
             });
        })
    }
    specificAction(action){
        action.contact = {
            first_name: this.contact.first_name,
            last_name: this.contact.last_name
        }
        console.log(action, this.contact)
        this.navCtrl.push(SpecificAction, {action: action});
    }
    addAction(){
        let modal = this.modalCtrl.create(AddAction, {contact: this.contact});
        modal.present();
    }
    openEdit(){
        let modal = this.modalCtrl.create(EditContact);
        modal.present();
    }
    icon(x){
        if(x === 'Text Message'){
            return "chatbubbles"
        } else if(x === 'Email'){
            return "mail"
        }
    }
    slideChange() {
        let x = this.choosePipe.getActiveIndex();
        this.advancePipe(x);
    }
    advancePipe(x){
        let pipe = x + 1;
        let send = {
            pipeline_position: pipe
        }
        let id = this.contact.id;        
        this.getService.getStorage().then(key => {
            this.putService.advancePipe(key, id, send).subscribe(res => {
                this.getSpecificContact();
                this.events.publish('pipeAdvance');
                this.events.publish('points');
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
    getIndex(x){
        if(this.choosePipe.getActiveIndex() == this.slides.indexOf(x)){
            return "lightgreen";
        }
        if(this.choosePipe.getActiveIndex() >= this.slides.indexOf(x)){
            return '#9cf89c'
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit(){
        this.getSpecificContact();
    }
    
}