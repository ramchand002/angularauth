import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoAuthGuard } from "src/app/@core/guards";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})


export class AuthRoutingModule { }