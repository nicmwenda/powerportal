import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailsComponent],
  imports: [CommonModule, SharedModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
