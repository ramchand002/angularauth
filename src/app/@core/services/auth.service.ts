import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    token() {
        let token = localStorage.getItem('token');
        if (!token) return null;
        return token;
    }
}