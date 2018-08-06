import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})
export class ProfiledetailComponent implements OnInit {
  name:string;
  company: string;
  email: string;
  eyeColor:string;
  contactnumber:number;
  balance:number;
  isActive: boolean;

  closeBtnName: string ='Close';

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
