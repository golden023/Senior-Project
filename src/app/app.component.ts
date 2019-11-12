import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private titleService: Title
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  currentUser: User;

  title = 'senior-project';

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

