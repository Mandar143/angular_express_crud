import { Component, OnInit } from '@angular/core';
import { RegService } from './reg.service';
import { Reg } from './reg';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers : [RegService]
})
export class RegComponent implements OnInit {

  emlptn="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  nm:string
  add :string
  eml :string
  mno:number
  pcode :number

  resmsg:string
   arr:any
   regs:any
  _id: string
  id1:string
  rrr:any
  constructor(
    private regService : RegService,
    private http : HttpClient
  ) { 

    this.http.get('http://localhost:3000/registration').subscribe(data => {
      // console.log(data)
      this.regs=data
      //location.reload();
    })
  }

  ngOnInit() {
  }

  onSubmit(frm : any){

   console.log(frm)
    this.regService.insertOne(frm as Reg).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resmsg="Record Saved Successfully..."
      }
    )
    location.reload();
  }

  onSelect(_id:string,name:string,address:string,email:string,mobileno:string, pincode:string){
   console.log(name)
   this.arr={
     "_id":_id
   }

  this.regService.selectdata(this.arr,result=>{
   // console.log(result)
     this.nm=result.name
     this.add=result.address
     this.eml=result.email
     this.mno=result.mobileno
     this.pcode=result.pincode
     this.id1=result._id
   })

  }

  updaterec(name:string,address:string,email:string,mobileno:string, pincode:string, id:string){
    // updaterec(frm){
      console.log(pincode)
      let abc={
        "name":name,
        "address":address,
        "email":email,
        "mobileno":mobileno,
        "pincode":pincode,
        "_id":id
      }
      console.log(abc)
      
      this.regService.updatedata(abc).subscribe(
        res=>console.log(res),
        err=>console.log(err),
        ()=>{
          //location.reload()
          this.resmsg="Record Updated Successfully..."
        }
      )
      
    }

    onDelete(_id:string){
      console.log(name)
      this.regService.deleteData(_id).subscribe(
        res=>console.log(res),
        err=>console.log(err),
        ()=>{
          //location.reload()
          this.resmsg="Record Deleted Successfully..."
        }
      )
    }
    // updaterec(id:string,frm:any){
    //   console.log(id)
    //   // this.regService.updatedata(name,address,email,mobileno, pincode, id).subscribe(
    //   //   res=>console.log(res),
    //   //   err=>console.log(err),
    //   //   ()=>{
    //   //     this.resmsg="Record Updated Successfully..."
    //   //   }
    //   // )

    // }



}
