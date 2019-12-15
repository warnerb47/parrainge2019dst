import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //baseUrl = 'http://127.0.0.1:5002/';
  baseUrl = 'assets/json/';
  
  constructor(private httpClient: HttpClient) { }

  get(url) {
    return new Promise((resolve, reject)=>{
      this.httpClient.get(this.baseUrl+url)
      .subscribe((data:any)=>{
        resolve(data.values);
      },
      (error)=>{reject(error);
      });
    }); 
  }

  delete(url, id){
    return this.httpClient.delete(this.baseUrl + url + "/" + id);
  }

  post(url, data){
    return this.httpClient.post(this.baseUrl + url, data);
  }

  patch(url, data){
    return this.httpClient.patch(this.baseUrl + url, data);
  }

}
