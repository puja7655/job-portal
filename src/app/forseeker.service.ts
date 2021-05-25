import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment } from '../environments/environment';

const PUBLIC='http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class ForseekerService {
  result:any;
 
  constructor(private httpCli:HttpClient) { }
  
  login(username:any,password:any){
   // return this.httpCli.post(`${PUBLIC}employee/login`,body
    return this.httpCli.get(`${PUBLIC}freelancer?username=${username}&password=${password}`,
    {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json').append('Cache-Control','no-cache, no-store, must-revalidate')
    }
    );
  }
  employee_register(body:any){
    return this.httpCli.post(`${PUBLIC}recruiter`,body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json').append('Cache-Control','no-cache, no-store, must-revalidate')
    }
    );
  }
  getjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '
      })
    };
    console.log(httpOptions);
    return this.httpCli.get(`${PUBLIC}postedJobs`,httpOptions);
  }
  searchbycompany(companyname)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
      })
    };
    return this.httpCli.get(`${PUBLIC}postedJobs?companyName=${companyname}`,httpOptions);
  }
  searchbyrole(jobrole:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
      })
    };
    return this.httpCli.get(`${PUBLIC}postedJobs?jobRole_like=${jobrole}`,httpOptions);
  }
  searchBySkill(skill:any)
  {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
      })
    };
    return this.httpCli.get(`${PUBLIC}postedJobs?skills_like=${skill}`,httpOptions);
  }
   applyjob(job:any)
  {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
        'Content-Type':'application/json',
      })
    };
    job['recruiterCompanyName']=job['companyName'];
    job['freelancerId']=localStorage.getItem("freelancerId");
    return this.httpCli.post(`${PUBLIC}appliedJobs/`,job,httpOptions);
  }
  getappliedjobs()
  {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
        'Content-Type':'application/json',
      })
    };
    return this.httpCli.get(`${PUBLIC}freelancer/${localStorage.getItem("freelancerId")}/appliedJobs`,httpOptions);
  }
  uploadprofilepic(fd:any)
  {
    return this.httpCli.post(`${PUBLIC}employee/uploadpicture/${localStorage.getItem("freelancerId")}`,fd);
   
  }
gettoken()
{
  return localStorage.getItem('token');
}
Empupdateprofile(body:any)
{
  debugger;
  return this.httpCli.put(`${PUBLIC}freelancer/${localStorage.getItem("freelancerId")}`,body,
  {
    
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    
  });
}
getprofile()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
      'Content-Type':'application/json',
    })
  };
  return this.httpCli.get(`${PUBLIC}freelancer/${localStorage.getItem("freelancerId")}`,httpOptions);
}
 getFreelancer(id:any){
  debugger;
  let result;
  const httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma':'no-cache',
      'Content-Type':'application/json',
    })
  };
 return this.httpCli.get(`${PUBLIC}freelancer/${id}`,httpOptions)
}
logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('currentemployee');
  localStorage.removeItem('currentemployeeid')
}
}
