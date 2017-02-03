import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

//Pages
import { GoalsPage } from '../pages/goals/goals';
import { PipelinePage } from '../pages/pipeline/pipeline';
import { ActionsPage } from '../pages/actions/actions';
import { TabsPage } from '../pages/tabs/tabs';
import { MarketingPage } from '../pages/marketing/marketing';
import { MorePage } from '../pages/more/more';

//Filters
import { FilterPipe } from './filter';

//Modals
import { AddProspect } from '../modals/addProspect/addProspect';
import { LoginModal } from '../modals/login/login';
import { EmailLoginModal } from '../modals/email-login/emailLogin';
import { FBLoginModal } from '../modals/fb-login/fbLogin';
import { GoogleLoginModal } from '../modals/google-login/googleLogin';

@NgModule({
  declarations: [
    MyApp,

    //Pages
    GoalsPage,
    PipelinePage,
    ActionsPage,
    MarketingPage,
    MorePage,
    TabsPage,

    //Filters
    FilterPipe,

    //Modals
    AddProspect,
    LoginModal,
    EmailLoginModal,
    FBLoginModal,
    GoogleLoginModal

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    //Pages
    GoalsPage,
    PipelinePage,
    ActionsPage,
    MarketingPage,
    MorePage,
    TabsPage,

    //Modals
    AddProspect,
    LoginModal,
    EmailLoginModal,
    FBLoginModal,
    GoogleLoginModal

  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
    ]
})
export class AppModule {}
