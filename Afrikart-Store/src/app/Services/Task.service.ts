import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Task } from "../Models/Task";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class TaskService {

    http: HttpClient = inject(HttpClient);

    CreateTask(task: Task) {
        this.http.post<{ name: string }>('https://angularhttptestingstuff-default-rtdb.firebaseio.com/tasks.json',
            task, { headers: { 'my-header': 'hello' } })
            .subscribe((response) => {
            })
    }


    DeleteTask(id: string | undefined) {
        this.http.delete('https://angularhttptestingstuff-default-rtdb.firebaseio.com/tasks/' + id + '.json')
            .subscribe(() => {
            })
    }

    DeleteAllTasks() {
        this.http.delete('https://angularhttptestingstuff-default-rtdb.firebaseio.com/tasks.json')
            .subscribe(() => {
            });
    }

    GetAllTasks() {

        return this.http.get<{ [key: string]: Task }>('https://angularhttptestingstuff-default-rtdb.firebaseio.com/tasks.json')
            .pipe(map((responseObj) => {
                let tasks = [];

                for (let stringKey in responseObj) {
                    if (responseObj.hasOwnProperty(stringKey)) {
                        tasks.push({ ...responseObj[stringKey], id: stringKey })
                    }

                }

                return tasks;

            }))
    }

    UpdateTask(data: Task, id: string | undefined) {
        return this.http.put('https://angularhttptestingstuff-default-rtdb.firebaseio.com/tasks/' + id + '.json', data)
            .subscribe()
    }


}