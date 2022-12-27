import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-task',
  templateUrl: './componente-task.component.html',
  styleUrls: ['./componente-task.component.css']
})
export class ComponenteTaskComponent {

  constructor(){}

  TodoList=[
    {
      id:1, 'task': 'Task1'
    },
    {
      id:1, 'task': 'Task1'
    }
  ]  
}
