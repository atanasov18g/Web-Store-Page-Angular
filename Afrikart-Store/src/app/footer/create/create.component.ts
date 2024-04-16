import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { ReactiveFormsModule, NgForm, FormControl, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements AfterViewInit {
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  @Input() editOn: boolean = false;

  @Input() selectedTask: Task = inject(Task);


  @ViewChild('taskForm') taskForm: NgForm;

  OnCloseForm() {
    this.CloseForm.emit(false);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.taskForm.setValue(this.selectedTask);
    }, 0)

  }


  onFormSubmit(form: NgForm) {
    this.EmitTaskData.emit(form.value)
    this.CloseForm.emit(false);
  }

}
