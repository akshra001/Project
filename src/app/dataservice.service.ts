import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class DataserviceService implements OnInit {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/data.json';

  ngOnInit() {


  }

  getData() {
    return this.http.get(this.configUrl)
  }

}
