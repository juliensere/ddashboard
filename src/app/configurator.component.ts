/**
 * Created by JulienSere on 01/01/2017.
 */
import { Component, Input } from '@angular/core';
import { EndpointService } from "./endpoint.service"
import { FormsModule } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Endpoint } from "./endpoint/endpoint"
import { EndpointBuild } from "./Build"

@Component({
  selector: 'configurator',
  inputs: ['url'],
  templateUrl: './configurator.component.html',
})
export class ConfiguratorComponent {
  public isError: boolean;

}
