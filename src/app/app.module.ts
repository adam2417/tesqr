import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http/ngx';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { QrisapiService } from '../service/qrisapi.service';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, HttpClientModule, NgxQRCodeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },QrisapiService,SQLite,SQLitePorter],
  bootstrap: [AppComponent]
})
export class AppModule {}
