import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgramMaterialComponent } from "./program-material/program-material.component";

const routes: Routes = [
   {
       path: 'dashboard',
       component: DashboardComponent
   },
   {
    path: 'program-material',
    component: ProgramMaterialComponent
}
]
@NgModule({
 declarations: [],
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class AdminRoutingModule { }
