import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Client } from './client';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(rg: Client){ 
    console.log(rg)
    return this.http.post('http://localhost:3000/reg',rg,{

  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
  }

  deleteOne(_id:string){
    console.log(_id)
    let reg=new Client()
  
  // reg._id=_id
    return this.http.put('http://localhost:3000/del',reg,{

  headers:new HttpHeaders({
    'Content-Type':'application/json'
    })
  })
  }
}
