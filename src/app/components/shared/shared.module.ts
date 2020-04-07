import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NopagefoundComponent } from '../nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';




@NgModule ({
    declarations: [
        HomeComponent,
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        FooterComponent,
        SectionComponent,
    ],
    exports: [
        HomeComponent,
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        FooterComponent,
        SectionComponent,
    ],
    imports: [
        
    ]
})


export class SharedModule { }