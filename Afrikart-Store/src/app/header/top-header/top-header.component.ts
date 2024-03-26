import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook,faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'top-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faXTwitter = faXTwitter;
}
