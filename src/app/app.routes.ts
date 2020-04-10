import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// import { PagesComponent } from './components/pages/pages.component';



const appRoutes: Routes = [
    // { path: '', component: PagesComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: LoginComponent},
    
    // { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: HomeComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes );