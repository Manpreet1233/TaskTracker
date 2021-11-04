import { Component, OnInit, Input, Output } from '@angular/core';
import {Task} from '../../Task'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task; 
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(task:any) {
    this.onToggleReminder.emit(task);
  }

}
