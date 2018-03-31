import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { MainViewComponent } from './main-view/main-view.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'main', component: MainViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}