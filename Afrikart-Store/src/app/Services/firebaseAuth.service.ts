import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Subject, catchError, tap, throwError } from "rxjs";
import { fireAuthResponse } from "../Models/fireAuthResponse";
import { fireUser } from "../Models/fireUser";

@Injectable({
    providedIn: 'root',
},)

export class fireBaseAuthService {


    http: HttpClient = inject(HttpClient);
    user = new Subject<fireUser>();
    isLogged: boolean = false;


    signUp(email: string, password: string) {

        const data = { email: email, password: password, returnSecureToken: true }

        return this.http.post<fireAuthResponse>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAl53A72orUxIgBUh8nWZXvNKWxwHSPHdM',
            data
        ).pipe(catchError(this.handleError), tap((res) => {
            this.handleCreateUser(res);
        }))
    }


    login(email: string, password: string) {

        const data = { email: email, password: password, returnSecureToken: true }

        return this.http.post<fireAuthResponse>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAl53A72orUxIgBUh8nWZXvNKWxwHSPHdM',
            data
        ).pipe(catchError(this.handleError), tap((res)=>{
            this.handleCreateUser(res);
        }))
    }

    logout(){
        this.user.next(null);
        alert('You are now logged out!')
    }


    private handleCreateUser(res) {
        const expiresInTime = new Date().getTime() + +res.expiresIn * 1000;
        const expiresIn = new Date(expiresInTime);
        const user = new fireUser(res.email, res.localId, res.idToken, expiresIn);
        this.user.next(user);
    }


    private handleError(err: any) {
        let errorMessage = 'An unknown error has occured';

        console.log(err);


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
                errorMessage = 'Requests blocked temporarily. Too many attempts!.';
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMessage = 'Check if email/account/password is correct. Try again.';
                break;
            case "INVALID_PASSWORD":
                errorMessage = 'Your password is incorrect. Try again.';
                break;
        }
        return throwError(() => errorMessage)
    }

}