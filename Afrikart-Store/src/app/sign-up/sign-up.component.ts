import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { fireBaseAuthService } from '../Services/firebaseAuth.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { LoaderComponent } from '../utility/loader/loader.component';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from '../utility/snackbar/snackbar.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule, LoaderComponent, CommonModule, SnackbarComponent],
  providers: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {

  showLoading: boolean = false;
  errorMessage: string | null = null;


  fireAuthService: fireBaseAuthService = inject(fireBaseAuthService);



  onFormSubmitted(form: NgForm) {



    const email = form.value.email;
    const password = form.value.password;
    const rePassword = form.value.rePassword;


    if (password !== rePassword) {
      alert('Password does not match!')
      return;
    }

    this.showLoading = true;
    this.fireAuthService.signUp(email, password).subscribe({
      next: (res) => {
        console.log(res)
        this.showLoading = false;
      },
      error: (errMsg) => {
        this.showLoading = false;
        this.errorMessage = errMsg;
        this.hideSnackbar();
      }
    })


    form.reset();

  }

  hideSnackbar(){
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }


}
