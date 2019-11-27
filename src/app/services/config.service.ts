import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  PROTOCOL = 'http://';
  PORT = 3443;

  constructor() {
    this.PROTOCOL = location.protocol + '//'; // 'http://';
    this.HOST = _.split(location.host, ':')[0];

    if (this.HOST === 'localhost') {
      this.PORT = 3443;
      this.PATH = '';
    } else {
      if (this.PROTOCOL === 'http://') {
        this.PORT = 80;
      } else {
        this.PORT = 443;
      }

      this.PATH = '/server';
    }

    this.URI = `${this.PROTOCOL}${this.HOST}:${this.PORT}${this.PATH}`;
  }

  getServer(service: string): string {
    const host = _.split(location.host, ':')[0];

    return `${this.PROTOCOL}${host}:${this.PORT}${service}`;
  }

  getWSServer(namespace: string): string {
    //return this.URI + namespace;
    return this.PROTOCOL + this.HOST + ':' + this.PORT;
  }
}
