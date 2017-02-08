import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { NavController } from 'ionic-angular';
import { PutService } from '../../services/putService';

@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html',
  providers: [ GetService, PutService ]

})
export class ActionsPage implements OnInit{
  constructor(public navCtrl: NavController, private getService: GetService, public putService: PutService) {}

  public actions;
  public action = {
    action_type: {
      name: ''
    },
    contact: {
      first_name: ''
    },
    due_date: ''
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
