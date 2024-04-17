import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  @Input()
  currentTask: Task | null = null;

  @Output()
  closeView: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCloseView() {
    this.closeView.emit(false);
  }

}
