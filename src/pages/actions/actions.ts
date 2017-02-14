import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { NavController, ModalController, Events } from 'ionic-angular';
import { PutService } from '../../services/putService';
import { AddContact } from '../../modals/add-contact/add-contact';
import { SpecificAction } from '../../modals/specific-action/specific-action';
import { ChooseActionContact } from '../../modals/choose-action-contact/choose-action-contact';

@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html',
  providers: [ GetService, PutService ]

})
export class ActionsPage implements OnInit{
  constructor(public navCtrl: NavController, private getService: GetService, public putService: PutService, public modalCtrl: ModalController, public events: Events) {
    this.events.subscribe('actionAdded', () =>{
      this.getActions();
    })
  }

  public actions;
  public action = {
    action_type: {
      name: ''
    },
    complete: 0,
    contact: {
      first_name: ''
    },
    due_date: '',
    id: 0,
  }
  public newAction = {
    "complete": 1
  }
  public status = true;

  getActions(){
    this.getService.getStorage().then(key => {
            this.getService.getActions(key).subscribe(res => {
              this.actions = res;
             });
        })
  }
  completeAction(id){
    this.getService.getStorage().then(key => {
      this.putService.completeAction(key, id, this.newAction).subscribe(res => {
        this.getActions();
      })
    })
  }
  addContact(){
    let modal = this.modalCtrl.create(AddContact);
    modal.present();
  }
  chooseActionContact(){
    let modal = this.modalCtrl.create(ChooseActionContact);
    modal.present();
  }
  openSpecificAction(id){
    let modal = this.modalCtrl.create(SpecificAction, {id: id});
    modal.present();
  }
  statusCheck(stat){
    if(stat){
      return "lightgreen"
    } else {
      return "white"
    }
  }
  ngOnInit(){
    this.getActions();
  }
}
