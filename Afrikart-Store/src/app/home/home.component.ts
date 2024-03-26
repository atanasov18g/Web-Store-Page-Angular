import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { OurPolicyComponent } from './our-policy/our-policy.component';
import { RecommendedInstrumentsComponent } from './recommended-instruments/recommended-instruments.component';
import { EventsComponent } from './events/events.component';
import { LocationsComponent } from './locations/locations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent,OurPolicyComponent,RecommendedInstrumentsComponent,EventsComponent,LocationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
