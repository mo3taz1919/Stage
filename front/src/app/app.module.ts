import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from './service/crud.service';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { AddUserComponent } from './component/User/add-user/add-user.component';
import { EditUserComponent } from './component/User/edit-user/edit-user.component';
import { ListUserComponent } from './component/User/list-user/list-user.component';
import { ContratStageComponent } from './contrat-stage/contrat-stage.component';
import { ContratConfComponent } from './contrat-conf/contrat-conf.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    ContratStageComponent,
    ContratConfComponent
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   AppRoutingModule, BrowserModule,
   BrowserAnimationsModule,
   NoopAnimationsModule,
   MatDialogModule,
   MatFormFieldModule,
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule,
   MatTableModule,
   MatButtonModule,
   MatIconModule,
   MatPaginatorModule,MatInputModule, AppRoutingModule

   
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },CrudService
  ] ,
  bootstrap: [AppComponent],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));