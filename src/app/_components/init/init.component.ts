import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

}
