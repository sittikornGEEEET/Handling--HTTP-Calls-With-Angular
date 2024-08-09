import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-project-1';
  responseData: any;
  constructor(private http: HttpClient){}

  getData(){
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe
    ((data)=>{
      this.responseData = data;
      console.log(data);

    })
  }
}
