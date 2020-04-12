import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedService, SidebarService } from './services/services.index';


// Modulos




// Rutas
import { APP_ROUTES } from './app.routes';



// Modulos
import { PagesModule } from './components/pages/pages.module';
import { ServiceModule } from './services/service.module';
import { AbarrotesComponent } from './components/abarrotes/abarrotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';


// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AbarrotesComponent,
    LoginComponent,
    RegisterComponent
    
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule,
    FormsModule
    // FontAwesomeModule
  ],
  providers: [
    SharedService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
