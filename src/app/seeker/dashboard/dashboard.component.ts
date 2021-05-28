import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ForseekerService} from '../../forseeker.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private activeroute:ActivatedRoute,private seekerservie:ForseekerService) { }
  username:any;
  ngOnInit() {
    this.username=localStorage.getItem('currentemployee');
  }
  logoutemployee()
  {
    this.seekerservie.logout();
    this.router.navigate(['login/empLogin'],)
  }
  jobs()
  {
    if(localStorage.getItem('loggedIn'))
    this.router.navigate(['jobs'],{relativeTo:this.activeroute});
    else{
      this.router.navigate(['login/empLogin'],)
    }
  }
  appliedjobs()
  {
    if(localStorage.getItem('loggedIn'))
    this.router.navigate(['appliedjobs'],{relativeTo:this.activeroute});
    else{
      this.router.navigate(['login/empLogin'],)
    }
  }
  gotoprofilepage()
  {
    if(localStorage.getItem('loggedIn'))
    this.router.navigate(['seeker/eprofile']);
    else{
      this.router.navigate(['login/empLogin'],)
    }
  }

}
