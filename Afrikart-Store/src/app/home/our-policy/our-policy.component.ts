import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faParachuteBox, faArrowsLeftRightToLine, faSackDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'our-policy',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './our-policy.component.html',
  styleUrl: './our-policy.component.css'
})
export class OurPolicyComponent {
  faParachuteBox = faParachuteBox;
  faArrowsLeftRightToLine = faArrowsLeftRightToLine;
  faSackDollar = faSackDollar;
}
