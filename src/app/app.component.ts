import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DDashboard';
  endpointsInput:string = `http://localhost:8080/supervision
http://dev1/supervision
http://dev2/supervision
http://dev3/supervision
http://dev4/supervision`;

  endpointsUrl: string[] = ['http://localhost:8080/supervision'];

  ngOnInit() {
    this.updateEndpoints();
  }

  updateEndpoints():void {
    this.endpointsUrl = [];
    this.endpointsInput.match(/^.*([\n\r]+|$)/gm).filter(value => value != "").map(value => this.endpointsUrl.push(value));
    //this.endpointsInput.split('\n').map(value => this.endpointsUrl.push(value));
  }
}
