import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Reg} from './reg';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegService {
  abc:any
  constructor(

    private http:HttpClient
  ) { }


  insertOne(rg:Reg){
    // console.log(rg)
      return this.http.post('http://localhost:3000/registration',rg,{

          headers:new HttpHeaders({
            'Content-Type':'application/json'
          })
      })
  }

  selectdata(_id:string,onResult:(res)=>void) {

    return this.http.post('http://localhost:3000/display',_id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }).subscribe(
      (response: Response) => onResult(response),
      err => onResult(err),
    )

  }
  

  updatedata(abc){

      console.log(abc)
        let reg=new Reg()
        reg.name=abc.name
        reg.address=abc.address
        reg.email=abc.email
        reg.mobileno=abc.mobileno
        reg.pincode=abc.pincode
        reg._id=abc._id

return  this.http.put(`http://localhost:3000/update`,reg,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
  }
    )
}

deleteData(_id){

  console.log(_id)
    let reg=new Reg()
    
    reg._id=_id

return  this.http.post(`http://localhost:3000/delete`,reg,{
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  )
}


}
