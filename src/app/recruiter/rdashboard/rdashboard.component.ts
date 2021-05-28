import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ForrecruiterService} from '../../forrecruiter.service';
@Component({
  selector: 'app-rdashboard',
  templateUrl: './rdashboard.component.html',
  styleUrls: ['./rdashboard.component.css']
})
export class RdashboardComponent implements OnInit {

  constructor(private router:Router,private activeroute:ActivatedRoute,private recservice:ForrecruiterService) { }
  companyName:any;
  ngOnInit() {
    this.companyName=localStorage.getItem("currentrecruiter");
  }
  logoutRecruiter()
  {
    this.recservice.logout();
    this.router.navigate(['login/recLogin'],)
  }
  applied_Employees()
  {
    if(localStorage.getItem('loggedIn'))
    this.router.navigate(['applied'],{relativeTo:this.activeroute});
    else{
      this.router.navigate(['login/recLogin'],)
    }
  }
  posted_jobs()
  {
    if(localStorage.getItem('loggedIn'))
    this.router.navigate(['postedjobs'],{relativeTo:this.activeroute});
    else{
      this.router.navigate(['login/recLogin'],)
    }
  }
  gotoprofilepage()
  {
    if(localStorage.getItem('loggedIn'))
    this.router.navigate(['recruiter/rprofile']);
    else{
      this.router.navigate(['login/recLogin'],)
    }
  }

}
