import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [
        PagesComponent
    ],
    exports: [
        
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    
    ],
    bootstrap: [PagesComponent]
})


export class PagesModule { }