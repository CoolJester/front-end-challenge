import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dadjokes',
  templateUrl: './dadjokes.component.html',
  styleUrls: ['./dadjokes.component.scss'],
})
export class DadjokesComponent {
  // Default joke
  joke: string = 'Some Dad Joke';
  url: string = 'https://google/com';

  // constructor(private http: HttpClient) {}

  getJoke() {
    // Debug
    console.log('Getting a joke');
  }

  request() {
    // return this.http.get(this.url);
  }
}
