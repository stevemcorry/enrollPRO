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

  public tasks;
  public status = true;

  getTasks(){
    this.getService.getTasks().subscribe( res => {
      console.log(res);
      this.tasks = res;
    })
  }
  statusCheck(stat){
    console.log(stat);
    if(stat){
      return "green"
    } else {
      return "white"
    }
  }


  ngOnInit(){
    this.getTasks();
  }
}
