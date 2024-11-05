import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotfoundComponent } from "./layout/notfound/notfound.component";

 const route: Routes = [
     {
         path: '**',
         component: NotfoundComponent
     }
 ]
@NgModule({
 imports: [RouterModule.forChild(route)],
 exports: [RouterModule]
})

export class LayoutRoutingModule { }