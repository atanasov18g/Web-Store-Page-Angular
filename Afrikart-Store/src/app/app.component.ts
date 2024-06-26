import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild, inject, viewChild } from '@angular/core';
import { Router, RouterOutlet, Event, EventType, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './utility/loader/loader.component';
import { Subscription } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { TaskService } from './Services/Task.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, LoaderComponent, FooterComponent, HttpClientModule],
  providers: [TaskService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebStore-Store';

  @ViewChild(LoaderComponent) loader: LoaderComponent;

  router: Router = inject(Router);


  private routerEventsSubscription: Subscription;


  // ngOnInit() {
  //   this.routerEventsSubscription = this.router.events.subscribe((routerEvent: Event) => {
  //     if (routerEvent instanceof NavigationStart) {
  //       this.showLoading = true;
  //     }
  //     if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel) {
  //       this.showLoading = false;
  //     }
  //   })
  // }

  // ngOnDestroy() {
  //   this.routerEventsSubscription.unsubscribe();
  // }

}


// this.router.events.subscribe((routerEvent: Event) =>{
//   if(routerEvent.type === EventType.NavigationStart){
//     this.showLoader = true;
//   }
//   if(routerEvent.type === EventType.NavigationEnd || routerEvent.type === EventType.NavigationCancel){
//     this.showLoader = false;
//   }
// })