import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from '../Services/Auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'login',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  faWindowClose = faWindowClose;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries) =>{
      const logout =  Boolean(queries.get('logout'));
      if(logout){
        this.authService.logout();
        alert('You are now logged out!')
      }
    })
  }

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;



  onLoginClicked(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;
    

   const user = this.authService.login(username, password)

    if(user === undefined){
      alert('Not correct information')
    }
    else{
      alert('Hello,' + user.name + '. You are logged in.')
    this.router.navigate(['/Products'])
    }

  }


}
