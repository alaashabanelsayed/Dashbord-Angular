import { Component,OnInit } from '@angular/core';
import { DashbordService } from '../dashbord.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{
 
 
 
 
  constructor( private dashbordService:DashbordService){}
ngOnInit() {
  
}
}

