import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
// import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';





import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DataserviceService } from './dataservice.service';
import { PagerService } from './pager.service';
import { FilterPipe } from './filter.pipe';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    FilterPipe,
    ProfiledetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule, //including into imports
    ModalModule.forRoot(),


  ],
  providers: [DataserviceService,PagerService],
  bootstrap: [AppComponent],
  entryComponents: [ProfiledetailComponent]
})
export class AppModule { }
