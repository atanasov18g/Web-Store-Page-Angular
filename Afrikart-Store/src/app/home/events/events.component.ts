import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'events',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  faCalendar = faCalendar;
  faHeart = faHeart;
}
