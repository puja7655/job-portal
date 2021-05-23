import { Component, OnInit } from '@angular/core';
import{ForseekerService} from '../../../forseeker.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

freelancer:any
jobs:any=[];
waitforjobs:any;
appliedmessage:any;
alreadyapplied:any;
errormessage:any;
totaljobs:any;
headers=['Company Name','Job Role','Skills','Job Type','Experience',''];
  constructor(private seekerservice:ForseekerService) { }
  ngOnInit() {
  this.getjobs();
  this.getFreelancer();
  }

  getFreelancer(){
    this.seekerservice.getFreelancer(localStorage.getItem("freelancerId")).subscribe((response:any)=>{
      if(response){
        this.freelancer=response;
      }
    })
  }
  getjobs()
  {
    debugger;
    this.seekerservice.getjobs().subscribe(
      (response:any)=>
    {
      if(response && response.length>0)
      {
      //   let resultArr=[];
      //   response.forEach((key)=>{
      //     key.postedJobs.forEach(element => {
      //       element["companyName"]=key.companyName;
      //       resultArr.push(element);
      //     });
      //     //resultArr=[...key.postedJobs];
      //   })
        this.jobs=[...response];
        this.totaljobs=response.length;
      } 
    },
    (error)=>{
      console.log(error.msg);
    }
    );
  }
  apply(jobapply:any)
  {
    debugger;
    console.log(jobapply);
    this.seekerservice.applyjob(jobapply).subscribe(
      (response:any)=>{
        if(response){
          console.log(response);
         this.appliedmessage="Job successfully applied";
         setTimeout(()=>{
          this.appliedmessage='';
          this.getjobs();
         },2000) ;
        }else{
          this.alreadyapplied=response.message; 
          setTimeout(()=>{
            this.alreadyapplied='';
            //this.getjobs();
           },1000);
        }
        
      },(err)=>{
        this.errormessage=err.message;
      }
    );
    
  }
}
