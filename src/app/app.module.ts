import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordpressVisComponent } from './wordpress-vis/wordpress-vis.component';
import { MapsVisComponent } from './maps-vis/maps-vis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    WordpressVisComponent,
    MapsVisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9Zi_SBuGm1my3LBCYTD7JAbwitMDtREU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
