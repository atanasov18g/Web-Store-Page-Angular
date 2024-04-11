import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
// import { AuthService } from '../Services/Auth.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../utility/loader/loader.component';
import { FormsModule, NgForm } from '@angular/forms';
import { fireBaseAuthService } from '../Services/firebaseAuth.service';
import { Observable } from 'rxjs';
import { fireAuthResponse } from '../Models/fireAuthResponse';
import { SnackbarComponent } from '../utility/snackbar/snackbar.component';


@Component({
  selector: 'login',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule, LoaderComponent, FormsModule, SnackbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  faWindowClose = faWindowClose;

  showLoading: boolean = false;
  errorMsg: string | null = null;
  authObs: Observable<fireAuthResponse>;


  fireAuthService: fireBaseAuthService = inject(fireBaseAuthService);
  // authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  // ngOnInit() {
  //   this.activeRoute.queryParamMap.subscribe((queries) => {
  //     const logout = Boolean(queries.get('logout'));
  //     this.showLoading = true;
  //     if (logout) {
  //       this.authService.logout();
  //       alert('You are now logged out!')
  //     }
  //   })
  //   this.showLoading = false;
  // }



  onLoginSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password

    this.showLoading = true;

    this.fireAuthService.login(email, password).subscribe({
      next: (res) => {
        console.log(res);
        this.showLoading = false;
      },
      error: (errMsg) => {
        this.showLoading = false;
        this.errorMsg = errMsg;
        this.hideSnackbar();
      }

    })

    form.reset();
  }



  hideSnackbar() {
    setTimeout(() => {
      this.errorMsg = null;
    }, 3000);
  }







  // @ViewChild('email') email: ElementRef;
  // @ViewChild('password') password: ElementRef;



  // onLoginClicked() {

  //   const email = this.email.nativeElement.value;
  //   const password = this.password.nativeElement.value;


  //   const user = this.authService.login(email, password)


  //   this.showLoading = true;
  //   if (user === undefined) {
  //     this.showLoading = false;
  //     alert('Not correct information')
  //   }
  //   else {
  //     alert('Hello,' + user.name + '. You are logged in.')
  //     this.router.navigate(['/Products'])
  //   }

  // }


}
