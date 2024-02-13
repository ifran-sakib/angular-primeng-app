import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit{

  id: number = 0;
  constructor( private currentRoute: ActivatedRoute,){

  }
  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    
    if(id!=null){
      this.id=Number(id);

    }
  }

}
