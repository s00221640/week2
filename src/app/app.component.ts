import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week2';
  thingsToDo = [
    'Learn javascript',
    'Learn Angular',
    'Learn Redux'
  ];
  thingsCompleted=[];

  TaskSummary():string {
    return '${this.thingsToDo.lenth} to do / ${this.thingsCompleted.length} completed';
  }
}
