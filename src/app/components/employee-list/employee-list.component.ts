import { Component } from '@angular/core';
import { Employee, EmployeeRequest } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[] = [];
  globalFilter = '';
  request: EmployeeRequest = {
    first: 0,
    rows: 10,
    sortField: '',
    sortOrder: 1,
    filter: {
      firstName: ''
    }
  }
  constructor(private employeeService: EmployeeService) { }



  getEmployeeList() {
    // this.employeeService.getEmployees(this.request).subscribe(
    //   data => this.employees = data
    // )

    this.employees = [
      {
        "id": "1",
        "firstName": "John",
        "lastName": "Doe",
        "dob": "13/06/1990",
        "email": "john.doe@gmail.com",
        "gender": "male",
        "country": "United Kingdom",
        "role": "Software Engineer",
        "dateOfJoining": "10/11/2023",
        "active": true
      },
      {
        "id": "2",
        "firstName": "Alice",
        "lastName": "Smith",
        "dob": "25/09/1985",
        "email": "alice.smith@example.com",
        "gender": "female",
        "country": "United States",
        "role": "Data Analyst",
        "dateOfJoining": "05/08/2022",
        "active": true
      },
      {
        "id": "3",
        "firstName": "David",
        "lastName": "Johnson",
        "dob": "12/03/1992",
        "email": "david.johnson@example.com",
        "gender": "male",
        "country": "Australia",
        "role": "Project Manager",
        "dateOfJoining": "20/09/2023",
        "active": true
      },
      {
        "id": "4",
        "firstName": "Emma",
        "lastName": "Williams",
        "dob": "04/11/1988",
        "email": "emma.williams@example.com",
        "gender": "female",
        "country": "Canada",
        "role": "Marketing Specialist",
        "dateOfJoining": "15/07/2021",
        "active": true
      },
      {
        "id": "5",
        "firstName": "Michael",
        "lastName": "Brown",
        "dob": "30/05/1995",
        "email": "michael.brown@example.com",
        "gender": "male",
        "country": "Germany",
        "role": "Financial Analyst",
        "dateOfJoining": "22/04/2022",
        "active": true
      },
      {
        "id": "6",
        "firstName": "Olivia",
        "lastName": "Davis",
        "dob": "17/09/1993",
        "email": "olivia.davis@example.com",
        "gender": "female",
        "country": "France",
        "role": "UX Designer",
        "dateOfJoining": "12/12/2021",
        "active": true
      },
      {
        "id": "7",
        "firstName": "William",
        "lastName": "Wilson",
        "dob": "08/02/1991",
        "email": "william.wilson@example.com",
        "gender": "male",
        "country": "Spain",
        "role": "Software Developer",
        "dateOfJoining": "30/10/2022",
        "active": true
      },
      {
        "id": "8",
        "firstName": "Sophia",
        "lastName": "Martinez",
        "dob": "22/07/1987",
        "email": "sophia.martinez@example.com",
        "gender": "female",
        "country": "Italy",
        "role": "Product Manager",
        "dateOfJoining": "18/06/2023",
        "active": true
      },
      {
        "id": "9",
        "firstName": "James",
        "lastName": "Garcia",
        "dob": "29/12/1994",
        "email": "james.garcia@example.com",
        "gender": "male",
        "country": "Japan",
        "role": "Business Analyst",
        "dateOfJoining": "25/05/2022",
        "active": true
      },
      {
        "id": "10",
        "firstName": "Ava",
        "lastName": "Rodriguez",
        "dob": "10/08/1996",
        "email": "ava.rodriguez@example.com",
        "gender": "female",
        "country": "Brazil",
        "role": "HR Manager",
        "dateOfJoining": "08/03/2023",
        "active": true
      }];
  }

  loadEmployees($event: any) {
    console.log($event);
    this.request.sortField = $event.sortField || '';
    this.request.sortOrder = $event.sortOrder || 1;
    this.request.first = $event.first || 0
    this.getEmployeeList();
  }

  filterEmployee() {
    this.request = {
      ...this.request,
      first: 0,
      filter: {
        firstName: this.globalFilter
      }
    }
    this.getEmployeeList();
  }
}