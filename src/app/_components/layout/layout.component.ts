import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppConstants } from '../../_constants/app.constants';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // neccessary code will be implemented
  }

  navigateToHome() {
    this.router.navigate([AppConstants.RouteURLs.HOME]);
  }

  navigateToMyDrive() {
    this.router.navigate([AppConstants.RouteURLs.MYDRIVE]);
  }

  navigateToSharedWithMe() {
    this.router.navigate([AppConstants.RouteURLs.SHAREDWITHME]);
  }

  navigateToRecent() {
    this.router.navigate([AppConstants.RouteURLs.RECENTS]);
  }

  navigateToStarred() {
    this.router.navigate([AppConstants.RouteURLs.STARRED]);
  }

  navigateToTrash() {
    this.router.navigate([AppConstants.RouteURLs.TRASH]);
  }
  
  navigateToStorage() {
    this.router.navigate([AppConstants.RouteURLs.STORAGE]);
  }
}
