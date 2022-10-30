import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allfolders',
  templateUrl: './allfolders.component.html',
  styleUrls: ['./allfolders.component.css']
})
export class AllfoldersComponent implements OnInit {

  title = 'UI_express_mysql';
  res1:any=[];
  subfolders_obj:any={}
  subfolders_keys: any=[];
  subfolders_values: any=[];
  ngOnInit()
{
this.allfolders();
}
allfolders()
{
  fetch('http://localhost:3000/allfolders').then((res)=>{
    res.json().then((res)=>
    {
 this.res1=res.allfolders
    })
   })
}
async foldersclick(item:any)
{
this.subfolders_values=[]
let res= await fetch(`http://localhost:3000/${item}`)
this.subfolders_obj={}
this.subfolders_keys=[]
this.subfolders_obj=await res.json()
for(let key in this.subfolders_obj)
{
  this.subfolders_keys.push(key)
}
}
subfoldersclick(item:any)
{
this.subfolders_values=[]
this.subfolders_values=this.subfolders_obj[item].map((x:any)=>x)
}

}

