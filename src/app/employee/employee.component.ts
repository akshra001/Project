import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  myDate: Date;
  constructor() { 
    this.myDate = new Date();
  }

  ngOnInit() {
  }

}
