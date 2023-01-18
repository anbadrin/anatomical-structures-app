import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { AnatomicalStructuresListComponent } from './components/anatomical-structures-list/anatomical-structures-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoModalComponent,
    AnatomicalStructuresListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
