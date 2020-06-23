import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from './employee.model';
import { ELEMENT_DATA } from './employee.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'status', 'firstName', 'middleName'];
  dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA);

  constructor(public router: Router) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  getRecord(row) {
    console.log(row);
  }

  goToEmployee(employee) {
    this.router.navigate([`dashboard/employee/${employee.userId}`]);
  }
}
