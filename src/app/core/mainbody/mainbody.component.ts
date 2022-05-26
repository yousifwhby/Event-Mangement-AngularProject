import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
   h:string="hello yousif"
  constructor() { }

  ngOnInit(): void {
  }

}
