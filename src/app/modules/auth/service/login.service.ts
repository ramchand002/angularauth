import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
  
    constructor(private http: HttpClient) { }

    login(body: any) {
     const _url = environment.apiUrl + "/api/TokenAuthMobile/Authenticate";   
     return this.http.post(_url, body);
    }
}