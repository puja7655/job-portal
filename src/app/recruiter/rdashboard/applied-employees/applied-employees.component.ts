import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{ForrecruiterService} from '../../../forrecruiter.service';
@Component({
  selector: 'app-applied-employees',
  templateUrl: './applied-employees.component.html',
  styleUrls: ['./applied-employees.component.css']
})
export class AppliedEmployeesComponent implements OnInit {
  headers=['SeekerName','SeekerMail','SeekerMobile','SeekerLoc','Interests','Applied For Job Ids',''];
  seekersInfo:any=[];
  seekerinterest:any;
  notapplied:any;
  errormsg:any;
  constructor(private router:Router,private activeroute:ActivatedRoute,private recservice:ForrecruiterService) { }

  ngOnInit() {
  //  setTimeout(()=>{
  //   this.getSeekers();
  //  },5000);
   this.getSeekers();
  }
getSeekers()
{
  this.recservice.getseekers().subscribe(
    (response:any)=>{
      if(response)
      {
        this.seekersInfo=response;
       // this.seekerinterest=response.employeearray.details.interests;
        console.log(this.seekersInfo);
      }
      else{
        this.notapplied=response.message;
        console.log(this.notapplied);
      }

    },(error:any)=>{
      this.errormsg="Internal Server Error/Server Issues";
    }
  )
}
call_for_interview(info){
  window.alert("Yor selected");
}
reject(info){
  window.alert("your rejected");
}
}
