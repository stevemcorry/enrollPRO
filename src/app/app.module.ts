import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

//D3
import { D3Service } from 'd3-ng2-service';

//Pages
import { GoalsPage } from '../pages/goals/goals';
import { PipelinePage } from '../pages/pipeline/pipeline';
import { ActionsPage } from '../pages/actions/actions';
import { TabsPage } from '../pages/tabs/tabs';
import { MarketingPage } from '../pages/marketing/marketing';
import { MorePage } from '../pages/more/more';
import { LoadingPage } from '../pages/loading/loading';

//Filters
import { FilterPipe } from './filter';
import { ActionFilter } from './actionFilter';
import { ContactFilterPipe }  from './contactFilter';

//Modals
import { SpecificProspect } from '../modals/specific-prospect/specific-prospect';
import { AddContact } from '../modals/add-contact/add-contact';
import { LoginModal } from '../modals/login/login';
import { EmailLoginModal } from '../modals/email-login/emailLogin';
import { FBLoginModal } from '../modals/fb-login/fbLogin';
import { GoogleLoginModal } from '../modals/google-login/googleLogin';
import { AddAction } from '../modals/add-action/add-action';
import { MarketOptions } from '../modals/market-options/market-options';
import { MarketEmail } from '../modals/market-email/market-email';
import { MarketSocial } from '../modals/market-social/market-social';
import { MarketText } from '../modals/market-text/market-text';
import { MarketDrip } from '../modals/market-drip/market-drip';
import { ChooseContacts } from '../modals/choose-contacts/choose-contacts';
import { ChooseActionContact } from '../modals/choose-action-contact/choose-action-contact';
import { SpecificAction } from '../modals/specific-action/specific-action';
import { EditGoals } from '../modals/edit-goals/edit-goals';
import { EditContact } from '../modals/edit-contact/edit-contact';
import { PipelineChoose } from '../modals/pipeline-choose/pipeline-choose';

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
    LoadingPage,

    //Filters
    FilterPipe,
    ActionFilter,
    ContactFilterPipe,

    //Modals
    SpecificProspect,
    LoginModal,
    EmailLoginModal,
    FBLoginModal,
    GoogleLoginModal,
    AddContact,
    AddAction,
    MarketOptions,
    MarketEmail,
    MarketSocial,
    MarketText,
    MarketDrip,
    ChooseContacts,
    ChooseActionContact,
    SpecificAction,
    EditGoals,
    EditContact,
    PipelineChoose,

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
    LoadingPage,

    //Modals
    SpecificProspect,
    LoginModal,
    EmailLoginModal,
    FBLoginModal,
    GoogleLoginModal,
    AddContact,
    AddAction,
    MarketOptions,
    MarketEmail,
    MarketSocial,
    MarketText,
    MarketDrip,
    ChooseContacts,
    ChooseActionContact,
    SpecificAction,
    EditGoals,
    EditContact,
    PipelineChoose,

  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    D3Service
    ]
})
export class AppModule {}
