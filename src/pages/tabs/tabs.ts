import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { ActionsPage } from '../actions/actions';
import { GoalsPage } from '../goals/goals';
import { PipelinePage } from '../pipeline/pipeline';
import { MarketingPage } from '../marketing/marketing';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html',
  selector: 'page-tabs'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ActionsPage;
  tab2Root: any = GoalsPage;
  tab3Root: any = PipelinePage;
  tab4Root: any = MarketingPage;
  tab5Root: any = MorePage;

  constructor(public events: Events) {

  }

  actions(){
    this.events.publish('actionSelect');
    //document.getElementById('tab-t0-0').style.backgroundImage = "url('../../assets/img/footer/FOOTERActions.png')"
  }
  goals(){
    this.events.publish('goalSelect');
    //document.getElementById('tab-t0-0').style.backgroundImage = "url('../assets/img/footer/FOOTERActions.png')"
  }
  pipeline(){
    this.events.publish('pipeSelect');
    //document.getElementById('tab-t0-0').style.backgroundImage = "url('../assets/img/footer/FOOTERActions.png')"
  }
  marketing(){
    this.events.publish('marketSelect');
    //document.getElementById('tab-t0-0').style.backgroundImage = "url('../assets/img/footer/FOOTERActions.png')"
  }
  more(){
    this.events.publish('moreSelect');
    //document.getElementById('tab-t0-0').style.backgroundImage = "url('../assets/img/footer/FOOTERActions.png')"
  }
}
