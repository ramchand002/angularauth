import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myLatestArchitecture';

  isLoggedIn = false;
  
 isUserLoggedIn() {
   let token = localStorage.getItem('token');
   if (!token) {
     return false;
   }
   return true;
 }
}
