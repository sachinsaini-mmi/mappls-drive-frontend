import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() { }

  suggFolderList: any = [
    { name: 'Carpool Onboarding', isShared: false },
    { name: 'Auth2 Details', isShared: true },
    { name: 'IRT Dashboard', isShared: false },
    { name: 'Bugs Sheet', isShared: false }
  ];

  suggFileList: any = [
    {
      name: 'Remaining Tasks(Carpool)', lastOpened: '19 Nov, 2024', owner: 'Dhruv Kumar',
      location: 'My Drive', icon: '../../../assets/images/profile.png', type: 'excel'
    },
    {
      name: 'Admin Console', lastOpened: '29 Nov, 2024', owner: 'Sachin Saini', location: 'Shared With Me',
      icon: '../../../assets/images/ic_male.png', type: 'doc'
    },
    {
      name: 'Bugs Sheet', lastOpened: '02 Nov, 2024', owner: 'Dhruv Kumar', location: 'My Drive',
      icon: '../../../assets/images/profile.png', type: 'doc'
    },
    {
      name: 'Remaining Tasks(Carpool)', lastOpened: '19 Nov, 2024', owner: 'Dhruv Kumar',
      location: 'My Drive', icon: '../../../assets/images/profile.png', type: 'doc'
    },
    {
      name: 'Super Admin Requirements', lastOpened: '25 Dec, 2024', owner: 'Anshu Kumar', location: 'Shared With Me',
      icon: '../../../assets/images/ic_male.png', type: 'doc'
    },
    {
      name: 'Admin Console', lastOpened: '29 Nov, 2024', owner: 'Sachin Saini', location: 'Shared With Me',
      icon: '../../../assets/images/ic_male.png', type: 'excel'
    },
    {
      name: 'Super Admin Requirements', lastOpened: '25 Dec, 2024', owner: 'Anshu Kumar', location: 'Shared With Me',
      icon: '../../../assets/images/ic_male.png', type: 'excel'
    },
    {
      name: 'Bugs Sheet', lastOpened: '02 Nov, 2024', owner: 'Dhruv Kumar', location: 'My Drive',
      icon: '../../../assets/images/profile.png', type: 'excel'
    },
    {
      name: 'Admin Console', lastOpened: '29 Nov, 2024', owner: 'Sachin Saini', location: 'Shared With Me',
      icon: '../../../assets/images/ic_male.png', type: 'excel'
    },
    {
      name: 'Bugs Sheet', lastOpened: '02 Nov, 2024', owner: 'Dhruv Kumar', location: 'My Drive',
      icon: '../../../assets/images/profile.png', type: 'doc'
    },
  ];

  hideShowGrid: boolean = false;

  hideShowGridView() {
    this.hideShowGrid = !this.hideShowGrid;
  }
}
