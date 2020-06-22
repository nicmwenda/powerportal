import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { ProfileComponent } from './profile/profile.component';
import { CreditComponent } from './credit/credit.component';
import { PayrollComponent } from './payroll/payroll.component';


@NgModule({
  declarations: [CompanyComponent, ProfileComponent, CreditComponent, PayrollComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
