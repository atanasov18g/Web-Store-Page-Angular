import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle, faPencilSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CreateComponent } from './create/create.component';
import { CommonModule } from '@angular/common';
import { Task } from '../Models/Task';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TaskService } from '../Services/Task.service';
import { LoaderComponent } from '../utility/loader/loader.component';
import { SnackbarComponent } from '../utility/snackbar/snackbar.component';
import { Subscription } from 'rxjs';
import { DetailsComponent } from './details/details.component';




@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, CreateComponent, CommonModule, LoaderComponent, SnackbarComponent, DetailsComponent],
  providers: [TaskService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy {

  faInfoCircle = faInfoCircle;
  faPencilSquare = faPencilSquare;
  faTrashCan = faTrashCan;

  showLoading: boolean = false;
  showCreateTaskForm: boolean = false;
  showTaskDetails: boolean = false;
  http: HttpClient = inject(HttpClient);

  allTasks: Task[] = [];
  editOn: boolean = false;
  selectedTask: Task;
  taskService: TaskService = inject(TaskService);
  currentTaskId: string = '';

  currentTask: Task | null = null;

  errorMessage: string | null = null;
  errorSub: Subscription;

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.editOn = false;
    this.selectedTask = { title: '', description: '', assignedTo: '', createdAt: '', priority: '', status: '' }
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  CreateUpdateTask(data: Task) {
    if (!this.editOn) {
      this.taskService.CreateTask(data);
    } else {
      this.taskService.UpdateTask(data, this.currentTaskId);
    }

    this.FetchAllTasks();
  }


  FetchTasksClick() {
    this.FetchAllTasks()

  }

  private FetchAllTasks() {
    this.showLoading = true;
    this.taskService.GetAllTasks().subscribe({
      next: (tasksRes) => {
        this.allTasks = tasksRes;
        this.showLoading = false;
      },
      error: (error) => {
        this.setErrorMsg(error);
        this.showLoading = false;

      }
    })
  }

  private setErrorMsg(err: HttpErrorResponse) {
    if (err.error.error === 'Permission denied') {
      this.errorMessage = 'You do not have permission to perform this action'
    }
    else {
      this.errorMessage = err.message;
    }
    setTimeout(() => {
      this.errorMessage = null;
    }, 2500)
  }

  DeleteTask(id: string | undefined) {
    this.taskService.DeleteTask(id);
  }

  DeleteAllTasks() {
    this.taskService.DeleteAllTasks();
  }

  OnEditTask(id: string | undefined) {
    this.currentTaskId = id;
    this.showCreateTaskForm = true;
    this.editOn = true;

    this.selectedTask = this.allTasks.find((task) => {
      return task.id = id;
    })
  }


  showDetails(id: string | undefined) {
    this.showTaskDetails = true;
    this.taskService.getTaskDetails(id).subscribe({
      next: (taskData) => {
        this.currentTask = taskData;
      }
    })
  }

  closeTaskDetails() {
    this.showTaskDetails = false;
  }

  ngOnInit() {

    this.FetchAllTasks();
    this.errorSub = this.taskService.errorSubject.subscribe({
      next: (httpErr) => {
        this.setErrorMsg(httpErr);
      }
    })
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe()
  }





}

