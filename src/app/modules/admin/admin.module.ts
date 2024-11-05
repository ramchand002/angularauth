import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgramMaterialComponent } from './program-material/program-material.component';

@NgModule({
 declarations: [
    DashboardComponent,
    ProgramMaterialComponent
  ],
 imports: [AdminRoutingModule],
 exports: []
})

export class AdminModule { }