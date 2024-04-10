import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
},)

export class fireBaseAuthService {


    http: HttpClient = inject(HttpClient);

    signUp(email: string, password: string) {

        const data = { email: email, password: password, returnSecureToken: true }

        return this.http.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAl53A72orUxIgBUh8nWZXvNKWxwHSPHdM',
            data
        ).pipe(catchError(err => {

            let errorMessage = 'An unknown error has occured';

            if (!err.error || !err.error.error) {
               return throwError(() => errorMessage)
            }

            switch (err.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = "This email already exists!";
                    break;
                case 'OPERATION_NOT_ALLOWED':
                    errorMessage = 'This operation is not allowed.'
                    break;
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    errorMessage = 'Requests blocked temporarilly. Too many attempts!.';
                    break;
            }
           return throwError(() => errorMessage)
        }))
    }

}