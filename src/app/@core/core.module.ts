import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { JwtInterceptor, ServerErrorInterceptor } from "./interceptors";

@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServerErrorInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ]
})

export class CoreModule { }