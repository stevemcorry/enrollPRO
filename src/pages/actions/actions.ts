import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html',
  providers: [ GetService ]

})
export class ActionsPage implements OnInit{
  constructor(public navCtrl: NavController, private getService: GetService) {}

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
  public status = true;

  getActions(){
    this.getService.getStorage().then(key => {
            this.getService.getActions(key).subscribe(res => {
              this.actions = res;
              console.log(res,'actions')
             });
        })
  }
  statusCheck(stat){
    if(stat){
      return "green"
    } else {
      return "white"
    }
  }
  ngOnInit(){
    this.getActions();
  }
}
