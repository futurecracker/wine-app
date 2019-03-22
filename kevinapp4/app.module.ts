import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Subscription, Observable } from 'rxjs';

import { AngularFireModule} from'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { environment } from '../environments/environment';
//import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCyQ8lOcc5voCvT1ve8L8W8f022qRVgObw",
  authDomain: "social-app-a30a7.firebaseapp.com",
  databaseURL: "https://social-app-a30a7.firebaseio.com",
  projectId: "social-app-a30a7",
  storageBucket: "social-app-a30a7.appspot.com",
  messagingSenderId: "84362836159"
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
