import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NopagefoundComponent } from '../nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AbarrotesComponent } from './sidebar/abarrotes/abarrotes.component';
import { ArrozComponent } from './sidebar/abarrotes/arroz.component';
import { NavComponent } from './nav/nav.component';
import { NavAbarrotesComponent } from './sidebar/nav-abarrotes/nav-abarrotes.component';






@NgModule ({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HomeComponent,
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        FooterComponent,
        SectionComponent,
        AbarrotesComponent,
        ArrozComponent,
        NavComponent,
        NavAbarrotesComponent,
        
       
    ],
    exports: [
        HomeComponent,
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        FooterComponent,
        SectionComponent,
        NavComponent
    ]
})


export class SharedModule { }