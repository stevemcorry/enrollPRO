import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GoalsPage } from '../pages/goals/goals';
import { PipelinePage } from '../pages/pipeline/pipeline';
import { ActionsPage } from '../pages/actions/actions';
import { TabsPage } from '../pages/tabs/tabs';
import { MarketingPage } from '../pages/marketing/marketing';
import { MorePage } from '../pages/more/more';
import { FilterPipe } from './filter';
import { AddProspect } from '../modals/addProspect/addProspect';

@NgModule({
  declarations: [
    MyApp,
    GoalsPage,
    PipelinePage,
    ActionsPage,
    MarketingPage,
    MorePage,
    TabsPage,
    FilterPipe,
    AddProspect
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoalsPage,
    PipelinePage,
    ActionsPage,
    MarketingPage,
    MorePage,
    TabsPage,
    AddProspect
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
