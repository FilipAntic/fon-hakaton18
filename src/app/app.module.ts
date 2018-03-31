import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/services/auth.service';
import { RegisterComponent } from './register/register.component';
import { SearchPeopleComponent } from './search-people/search-people.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AppRoutingModule } from './app-routing.module';
import { CategorySearchComponent } from './category-search/category-search.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchPeopleComponent,
    MainViewComponent,
    CategorySearchComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TabViewModule,
    TableModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
