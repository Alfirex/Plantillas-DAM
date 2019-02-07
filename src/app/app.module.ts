import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

// Importar lo necesario para firebase:
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegistroComponent } from './registro/registro.component';
import { firebaseConfig } from '../config';




@NgModule({
  declarations: [AppComponent, RegistroComponent],
  entryComponents: [],
  imports: [
    FormsModule,
      AngularFireModule.initializeApp(firebaseConfig.fire),
      AngularFirestoreModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,  MatButtonModule, MatCheckboxModule, NoopAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
