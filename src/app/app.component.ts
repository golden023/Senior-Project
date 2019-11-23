import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, AuthenticationService } from './_services';
import { User } from './_models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentUser: User;
  currentServer;
  users = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private titleService: Title
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit(): void {
    this.authenticationService.getServer().subscribe(server => this.currentServer = server);
    console.log("Debug" + this.authenticationService.getServer());
  }

  title = 'senior-project';

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getserver() {
    return this.authenticationService.getServer();
  }
}

