import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle, faPencilSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CreateComponent } from './create/create.component';
import { CommonModule } from '@angular/common';
import { Task } from '../Models/Task';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../Services/Task.service';
import { LoaderComponent } from '../utility/loader/loader.component';
import { SnackbarComponent } from '../utility/snackbar/snackbar.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, CreateComponent, CommonModule, LoaderComponent, SnackbarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  faPencilSquare = faPencilSquare;
  faTrashCan = faTrashCan;

  showLoading: boolean = false;
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);
  taskService: TaskService = inject(TaskService);
  allTasks: Task[] = [];
  editOn: boolean = false;
  selectedTask: Task;
  currentTaskId: string = '';
  errorMessage: string | null = null;


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
    setTimeout(() => {
      this.taskService.GetAllTasks().subscribe({
        next: (tasksRes) => {
          this.allTasks = tasksRes;
          this.showLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.showLoading = false;
        }
      })
    },1400)
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

  ngOnInit() {
    this.FetchAllTasks();

  }

}
