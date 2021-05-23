import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const PRIVATE='http://localhost:3000/';
const PUBLIC='http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class ForrecruiterService {

constructor(private httpCli:HttpClient) { }
  login(username:any,password:any){
    debugger;
    return this.httpCli.get(`${PUBLIC}recruiter?companyName=${username}&password=${password}`,
    {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json').append('Cache-Control','no-cache, no-store, must-revalidate')
    }
    );
  }
  recruiter_register(body:any){
    return this.httpCli.post(`${PUBLIC}recruiter`,body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
//   getjobs()
//   {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Accept': 'application/json, text/plain, */*',
//          'Content-Type':'application/json',
//         'Authorization': 'Bearer '+this.gettoken()
//       })
//     };
//     console.log(httpOptions);
//     return this.httpCli.get(`${PRIVATE}employees/getjobs/${this.getpayload().id}`,httpOptions);
//   }
//    applyjob(jobs:any)
//   {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':'application/json',
//         'Authorization': 'Bearer'+' '+this.gettoken()
//       })
//     };
//     let job_id:any=jobs.jobDetails._id;
//     let emp_id:any=this.getpayload().id;
//     return this.httpCli.get(`${PRIVATE}employees/apply/${emp_id}/${job_id}`,httpOptions);
//   }
  getpostedjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`${PRIVATE}recruiter/${localStorage.getItem("recruiterId")}/postedJobs`,httpOptions);
  }
  getseekers()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`${PRIVATE}recruiter/${localStorage.getItem("recruiterId")}/freelancer`,httpOptions);
  }
gettoken()
{
  return localStorage.getItem('token');
}
postjob(body:any,recruiter:any)
{
  debugger;
  const httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
      'Content-Type':'application/json',
      'Authorization': `Bearer${this.gettoken()}`
    })
  };
  let finalBody=JSON.parse(body);
  finalBody['companyName']=recruiter.companyName;
  finalBody['recruiterId']=recruiter.id
  return this.httpCli.post(`${PRIVATE}postedJobs/`,finalBody,httpOptions);
}
getpayload()
{
  let token=this.gettoken();
  return JSON.parse(token); 
}

getRecruiter(id:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
      'Content-Type':'application/json',
      'Authorization': `Bearer${this.gettoken()}`
    })
  };
 return this.httpCli.get(`${PUBLIC}recruiter/${id}`,httpOptions)
}
// getprofile()
// {
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':'application/json',
//       'Authorization': `Bearer${this.gettoken()}`
//     })
//   };
//   return this.httpCli.get(`${PRIVATE}employees/profile/${this.getpayload().id}`,httpOptions);
// }
logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('currentrecruiter');
  // localStorage.removeItem('currentemployeeid')
}
}


