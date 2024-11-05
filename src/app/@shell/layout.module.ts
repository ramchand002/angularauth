import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./layout/footer/footer.component";
import { HeaderComponent } from "./layout/header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { NotfoundComponent } from "./layout/notfound/notfound.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import { Layout2Component } from './layout2/layout2.component';
import { HeaderComponent2 } from "./layout2/header/header.component";
import { SidebarComponent2 } from "./layout2/sidebar/sidebar.component";
import { FooterComponent2 } from "./layout2/footer/footer.component";
import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotfoundComponent,
    LayoutComponent,
    Layout2Component,
    HeaderComponent2,
    SidebarComponent2,
    FooterComponent2
],
imports: [
    BrowserModule,
    RouterModule,
    LayoutRoutingModule
],
exports: [
    LayoutComponent,
    Layout2Component
]
})

export class LayoutModule { }