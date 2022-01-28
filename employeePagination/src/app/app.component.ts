import { Component, ViewChild,AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface Employee {
  empcode:number;
  name: string;
  department: string;
  doj: Date;
  basicsalary: number;
}

const ELEMENT_DATA: Employee[] = [
  {empcode:1001,name: "Lovely",department: "Research & Development",doj: new Date("2022-01-17"),basicsalary: 22000},
  {empcode:1002,name: "Laly",department: "Marketing",doj: new Date("2022-01-17"),basicsalary: 25000},
  {empcode:1003,name: "Saimon",department: "Sales",doj: new Date("2022-01-17"),basicsalary: 28000},
  {empcode:1004,name: "Celina",department: "HR",doj: new Date("2022-01-17"),basicsalary: 22000},
  {empcode:1005,name: "Lijo",department: "Management",doj: new Date("2022-01-17"),basicsalary: 32000},
  {empcode:1005,name: "Lincy",department: "Marketing",doj: new Date("2022-01-17"),basicsalary: 22000},
  {empcode:1006,name: "Inasu",department: "Management",doj: new Date("2022-01-17"),basicsalary: 42000},
  {empcode:1007,name: "Seby",department: "Sales",doj: new Date("2022-01-17"),basicsalary: 26000},
  {empcode:1008,name: "Jeena",department: "Research & Development",doj: new Date("2022-01-17"),basicsalary: 52000},
  {empcode:1009,name: "Anju",department: "HR",doj: new Date("2022-01-17"),basicsalary: 62000},
  {empcode:1010,name: "Jimil",department: "Sales",doj: new Date("2022-01-17"),basicsalary: 32000},
  {empcode:1011,name: "Aron",department: "Management",doj: new Date("2022-01-17"),basicsalary: 67000},
  {empcode:1012,name: "Adhithi",department: "Marketing",doj: new Date("2021-01-14"),basicsalary: 36000},
  {empcode:1013,name: "Sini",department: "Research & Development",doj: new Date("2021-02-11"),basicsalary: 62000},
  {empcode:1014,name: "Fenish",department: "HR",doj: new Date("2021-01-10"),basicsalary: 29000},
  {empcode:1015,name: "Aldrin",department: "Marketing",doj: new Date("2021-07-12"),basicsalary: 42000},
  {empcode:1016,name: "Liya",department: "Research & Development",doj: new Date("2022-01-17"),basicsalary: 55000},
  {empcode:1017,name: "Ancily",department: "Sales",doj: new Date("2021-01-17"),basicsalary: 70000},
  
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'employeePagination';
  displayedColumns: string[] = ['EmployeeCode', 'Name', 'Department', 'doj','BasicPay'];
  dataSource= new MatTableDataSource<Employee>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}
