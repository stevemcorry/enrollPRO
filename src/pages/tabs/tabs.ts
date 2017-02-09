import { Component } from '@angular/core';

import { ActionsPage } from '../actions/actions';
import { GoalsPage } from '../goals/goals';
import { PipelinePage } from '../pipeline/pipeline';
import { MarketingPage } from '../marketing/marketing';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ActionsPage;
  tab2Root: any = GoalsPage;
  tab3Root: any = PipelinePage;
  tab4Root: any = MarketingPage;
  tab5Root: any = MorePage;

  constructor() {

  }
}
