import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dd';
  endpointsInput:string = `http://localhost:8080/supervision
http://dvbolwsc02.rouen.francetelecom.fr:9551/orange-jwt`;

  endpointsUrl: string[] = ['http://localhost:8080/supervision'];

  ngOnInit() {
    this.updateEndpoints();
  }

  updateEndpoints():void {
    this.endpointsUrl = [];
    this.endpointsInput.match(/^.*([\n\r]+|$)/gm).filter(value => value != "").filter(this.cleanUrl).map(value => this.endpointsUrl.push(value));
    //this.endpointsInput.split('\n').map(value => this.endpointsUrl.push(value));
  }

  cleanUrl(urlToClean:string):string {
    if (urlToClean.endsWith('/')) {
      return urlToClean.slice(0, -1);
    }
    return urlToClean;
  }
}
