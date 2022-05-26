import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdcastService } from 'src/app/prodcast.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router:Router, private prodcasted:ProdcastService) { }

  ngOnInit(): void {

    sessionStorage.clear();
    this.prodcasted.atLogin(false,"none");
    this.router.navigateByUrl("/login");
  }
}
