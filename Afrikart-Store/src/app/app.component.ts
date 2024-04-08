import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild, inject, viewChild } from '@angular/core';
import { Router, RouterOutlet, Event, EventType, NavigationStart, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'WebStore-Store';

  @ViewChild(LoaderComponent) loader: LoaderComponent;


  showLoading: boolean = false;
  router: Router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent.type === EventType.NavigationStart) {
        this.showLoading = true;
      }
      if (routerEvent.type === EventType.NavigationEnd || routerEvent.type === EventType.NavigationCancel) {
        this.showLoading = false;
      }
    })
  }

}


// this.router.events.subscribe((routerEvent: Event) =>{
//   if(routerEvent.type === EventType.NavigationStart){
//     this.showLoader = true;
//   }
//   if(routerEvent.type === EventType.NavigationEnd || routerEvent.type === EventType.NavigationCancel){
//     this.showLoader = false;
//   }
// })