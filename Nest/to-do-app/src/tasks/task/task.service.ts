import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Task 1', completed: false },
    { id: 2, description: 'Task 2', completed: false },
    { id: 3, description: 'Task 3', completed: false },
    { id: 4, description: 'Task 4', completed: false },
    { id: 5, description: 'Task 5', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  create(task: Task){
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = lastId + 1;
    this.tasks.push(task);

    return task;
  }

  update(taskChanges: Task) {
    const currentTask = this.getById(taskChanges.id);
    if (currentTask) {
      currentTask.description = taskChanges.description;
      currentTask.completed = taskChanges.completed;
    }

    return currentTask;
  }

  delete(id: number){
    const task = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(task, 1);

    const msg = `Task #${id} foi apagada.`;
    return msg;
  }
}
