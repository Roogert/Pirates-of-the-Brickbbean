import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../User/user.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show: boolean = false;
  isAuthenticated = false;

  constructor(
    private router: Router,
    // private httpService: HTTPService,
    private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.authService.user.unsubscribe();
}

  // onFetchBricksets(searchInput:string){
  //   this.router.navigate(
  //     ['landing']
  //   )
  //   this.landingService.fetchBricksets(searchInput)
  //     }

  // onSaveData() {
  //   this.httpService.saveBricksetsToFirebase();
  // }

  // onFetchData() {
  //   this.httpService.fetchBricksetsFromFirebase().subscribe();
  // }

  onLogout() {
    this.authService.logout();
}
}
