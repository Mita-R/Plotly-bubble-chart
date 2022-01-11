import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chart';

  graph3 = {
    data: [
     { x: [0, 1, 2, 3, 4, 5, 6],
    y: [1, 9, 4, 7, 5, 2, 4],}
      
    ],
    mode: 'markers',
    marker: {
        size: [20, 40, 25, 10, 60, 90, 30],
    }
}
}