import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  constructor(private router:Router,private activatedroute:ActivatedRoute) { }
  tabset:boolean=false;

  ngOnInit() {
  }
  employeeregisterpage()
  {
    this.router.navigate(['empRegister'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }
  recruiterregisterpage()
  {
    this.router.navigate(['recRegister'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }
}
