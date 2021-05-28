import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import { map } from 'rxjs/operators';
import{ForrecruiterService} from '../../../forrecruiter.service';
@Component({
  selector: 'app-postedjobs',
  templateUrl: './postedjobs.component.html',
  styleUrls: ['./postedjobs.component.css']
})
export class PostedjobsComponent implements OnInit {
  headers=['Job Role','Experience','Job Type','PostedDate','Total Applications',''];
  posted:any =[];
  nojobs:any;
  totaljobs:any;
  errormsg:any;
  successmsg:boolean=false;
  appliedJobCount=new Map();
  constructor(private router:Router,private activeroute:ActivatedRoute,private recservice:ForrecruiterService) { }

  ngOnInit() {
    this.appliedJobs();
    this.postedjobs();
  }
  appliedJobs(){
    this.recservice.getappliedjobs().subscribe(
      (response:any)=>{
        if(response){
          response.forEach((ele)=>{
            if(!this.appliedJobCount.has(ele.jobId))
              this.appliedJobCount.set(ele.jobId,1)
            else this.appliedJobCount.set(ele.jobId,this.appliedJobCount.get(ele.jobId)+1);
          })
        }
      }
    )
  }
  postedjobs()
  {
    this.recservice.getpostedjobs().subscribe(
      (response:any)=>{
        debugger;
        if(response){
        console.log(response);
        response.forEach((ele)=>{
          ele['appliedJobCount']=this.appliedJobCount.get(ele.id);
        });
        this.posted=response;
        this.totaljobs=response.length;
        this.successmsg=true;
        }
        
      else{
        console.log(response);
        this.nojobs=response.message;
        console.log(response.length);
        
        //console.log(this.applied);
      }
    },(error)=>{
      this.errormsg=error;
    }
    )
  }
}
