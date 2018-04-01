import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/services/auth.service';
import { RegisterComponent } from './register/register.component';
import { SearchPeopleComponent } from './search-people/search-people.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AppRoutingModule } from './app-routing.module';
import { CategorySearchComponent } from './category-search/category-search.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './shared/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ImeiFinderComponent } from './imei-finder/imei-finder.component';
import { HttpModule } from '@angular/http';
import { PredictionComponent } from './prediction/prediction.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchPeopleComponent,
    MainViewComponent,
    CategorySearchComponent,
    ImeiFinderComponent,
    PredictionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TabViewModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TableModule,
    HttpClientModule,
    HttpModule,
    DialogModule
  ],
  providers: [AuthService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
