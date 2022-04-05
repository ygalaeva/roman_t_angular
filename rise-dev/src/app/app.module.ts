import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/parts/nav-bar/nav-bar.component';
import { SocialBarComponent } from './components/parts/social-bar/social-bar.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { BioComponent } from './components/pages/bio/bio.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { CallbackformComponent } from './components/parts/callbackform/callbackform.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { CardComponent } from './components/parts/card/card.component';
import { CardlistComponent } from './components/pages/cardlist/cardlist.component';

import { AppRoutingModule } from './app-routing.module';
import { ProjectdetailComponent } from './components/pages/projectdetail/projectdetail.component';
import { GalleryComponent } from './components/parts/gallery/gallery.component';
// import { AdminComponent } from './components/pages/admin/admin.component'

import { NgImageSliderModule } from 'ng-image-slider';
// import { NavComponent } from './components/parts/_admin/nav/nav.component';
// import { BoardComponent } from './components/parts/_admin/board/board.component';
// import { AddprojectComponent } from './components/parts/_admin/board/_boards/addproject/addproject.component';
// import { AuthComponent } from './components/pages/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/pages/messages/messages.component';
import { AdminMainComponent } from './components/pages/admin-main/admin-main.component';
import { ProjectListComponent } from './components/pages/project-list/project-list.component';
import { MessageDetailComponent } from './components/pages/message-detail/message-detail.component';
// import { LoaderComponent } from './components/parts/app-loader/app-loader.component';
import { GobackComponent } from './components/parts/goback/goback.component';
import { ProjectEditComponent } from './components/pages/project-edit/project-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SocialBarComponent,
    MainComponent,
    HeaderComponent,
    BioComponent,
    ContactsComponent,
    CallbackformComponent,
    FooterComponent,
    CardComponent,
    CardlistComponent,
    ProjectdetailComponent,
    GalleryComponent,
    MessagesComponent,
    AdminMainComponent,
    ProjectListComponent,
    MessageDetailComponent,
    // LoaderComponent,
    GobackComponent,
    ProjectEditComponent,
    // AdminComponent,
    // NavComponent,
    // BoardComponent,
    // AddprojectComponent,
    // AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgImageSliderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  ngOnInit() {

  }
}
