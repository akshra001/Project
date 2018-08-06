import { Component, OnInit } from '@angular/core';

import { DataserviceService } from '.././dataservice.service'
import { PagerService } from '.././pager.service'
import { FilterPipe } from '../filter.pipe';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ProfiledetailComponent} from '../profiledetail/profiledetail.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  bsModalRef: BsModalRef;
  public employeeData;
  pager: any = {};
  pagedItems: any[];
  public searchString: string;
  constructor(private Dataserviceservice: DataserviceService, private pagerservice: PagerService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.recieveData();

  }


  recieveData() {
    this.Dataserviceservice.getData()
      .subscribe(data => {  //for callback
        this.employeeData = data;
        // console.log(this.tableData);
        // initialize to page 1
        this.setPage(1);
      })
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerservice.getPager(this.employeeData.length, page);

    // get current page of items
    this.pagedItems = this.employeeData.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  viewProfile(initialState) {
    this.bsModalRef = this.modalService.show(ProfiledetailComponent, {initialState} );

  }
}