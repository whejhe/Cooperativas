import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//FIREBASE
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapPipe } from './pipes/map.pipe';

@NgModule({
  declarations: [AppComponent, MapPipe],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'md' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    LeafletModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
