import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { TopHeaderComponent } from './top-header/top-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, TopHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faHippo = faHippo;


  MenuItems: string[] = ['Home','About','Contact','Products'];
}
