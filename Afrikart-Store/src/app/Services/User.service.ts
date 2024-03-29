import { Injectable } from "@angular/core";
import { User } from "../Models/User";


@Injectable({
    providedIn: "root"
})
export class UserService {
    users: User[] = [
        new User(1, 'G Mori', 'gm', '12345'),
        new User(2, 'C Mori', 'cm', '12345'),
        new User(3, 'D Mori', 'dm', '12345')

    ]
}