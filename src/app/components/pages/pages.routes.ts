import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AbarrotesComponent } from '../abarrotes/abarrotes.component';
import { ArrozComponent } from '../shared/sidebar/abarrotes/arroz.component';
import { NavAbarrotesComponent } from '../shared/sidebar/nav-abarrotes/nav-abarrotes.component';




const pagesRoutes: Routes =  [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'abarrotes', component: NavAbarrotesComponent},
            {path: 'arroz', component: ArrozComponent},
        ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);