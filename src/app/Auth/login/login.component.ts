import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private activatedroute:ActivatedRoute) { }
  tabset:boolean=false;
  ngOnInit() {
  }
  employeeloginpage()
  {
    this.router.navigate(['empLogin'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }
  recruiterloginpage()
  {
    this.router.navigate(['recLogin'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }
}
