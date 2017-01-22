/**
 * Created by JulienSere on 26/12/2016.
 */
import { Component, Input } from '@angular/core';
import { EndpointService } from "../endpoint.service"
import { FormsModule } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Endpoint } from "./endpoint"
import { EndpointBuild } from "../Build"

@Component({
  selector: 'endpoint-detail',
  inputs: ['url', 'isGitActive', 'isBuildActive', 'isMetricsActive'],
  providers: [EndpointService],
  templateUrl: './endpoint-detail.component.html',
})
export class EndpointDetailComponent {
  public isError:boolean;
  public isLoading:boolean;
  public endpoint:Endpoint;
  public metrics:any;
  public git:any;
  public build:EndpointBuild;
  public branch:string = '';
  public url:string = 'http://localhost:8080/supervision';

  public isBuildActive:boolean;
  public isMetricsActive:boolean;
  public isGitActive:boolean;

  constructor(public endpointService: EndpointService, private http: Http) {
    this.build = new EndpointBuild();
    this.isLoading = false;
    this.isError = false;
    this.git = {};
    this.metrics = {};
  }

  ngOnInit(){
    this.http.get(this.url+'/info').map(res => res.json()).retry(1).subscribe(res => this.receiveInfo(res), err => this.errorInfo(err));
    this.http.get(this.url+'/metrics').map(res => res.json()).retry(1).subscribe(res => this.receiveMetrics(res), err => this.errorMetrics(err));
    this.isLoading = true;
  }

  update(): void {
    console.log('update');
    this.http.get(this.url+'/info').map(res => res.json()).retry(1).subscribe(res => this.receiveInfo(res), (err) => this.errorInfo(err));
    this.isLoading = true;
  }

  receiveInfo(res:any): void {
    this.git = res.git;
    this.build = res.build;
    this.isLoading = false;
    this.isError = false;
  }

  receiveMetrics(res:any): void {
    console.log('error');
    this.metrics = res;
  }

  changeBranch(): void {
    this.branch = "toot";
  }

  errorInfo(err:any): void {
    console.log('error');
    console.log(err.error());
    this.isLoading = false;
    this.isError = true;
  }

  errorMetrics(err:any): void {
    this.isLoading = false;
    this.isError = true;
    console.log(err.error());
  }

  formatBytes(bytes:number, decimals) {
      if (bytes == 0) return '0 Byte';
      var k = 1000; // or 1024 for binary
      var dm = decimals + 1 || 3;
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
