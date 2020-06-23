import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ELEMENT_DATA } from './../employee.data';
import { map, switchMap } from 'rxjs/operators';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  constructor(public route: ActivatedRoute) {
    let dealRef = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        ELEMENT_DATA.filter((obj) => {
          return obj.userId === params.get('employeeid');
        })
      )
    );

    dealRef.subscribe((result) => {
      this.employee = result;
    });
  }

  ngOnInit(): void {}
}
