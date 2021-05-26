import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForrecruiterService } from '../../forrecruiter.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  postjobForm: FormGroup;
  postedMsg:any;
  alreadyposted:any;
  errormsg:any;
  companyname:any;
  companyId:any;
  recruiter:any;
  constructor(private router: Router, private recservice: ForrecruiterService, private fb: FormBuilder) { }

  ngOnInit() {
    this.companyname=localStorage.getItem("currentrecruiter");
    this.companyId=localStorage.getItem("recruiterId");
    this.postjobForm = this.fb.group({
      companyId: new FormControl(this.companyId),
      jobRole: ['', Validators.required],
      expRequired: ['', Validators.required],
      skills: ['', Validators.required],
      educationalQualifications: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobType: ['', Validators.required],
      postedDate:['',Validators.required]
    })
    this.getRecruiter();
  }
  getRecruiter(){
    this.recservice.getRecruiter(localStorage.getItem("recruiterId")).subscribe((response:any)=>{
      if(response){
        this.recruiter=response;
      }
    })
  }
  logoutRecruiter() {
    this.recservice.logout();
    this.router.navigate(['login/recLogin'])
  }
  postajob() {
    console.log(this.postjobForm.value);
    this.postjobForm.value.skills=this.postjobForm.value.skills.toString().split(",")
    this.recservice.postjob(JSON.stringify(this.postjobForm.value),this.recruiter).subscribe(
      (response:any)=>{
        if(response)
        {
          this.postedMsg=response.message;
          setTimeout(()=>{
            this.postedMsg='';
            this.router.navigate(['rdashboard/postedjobs']);
          },2000);
        }else{
          this.alreadyposted=response.message;
          setTimeout(()=>{
            this.alreadyposted='';
          },2000);
        }
      },(error)=>{
        this.errormsg="Internal Server Error";
      }
    )
  }

}
