import { AccountsService } from './../accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : Object;

  constructor(private accounts: AccountsService) { }

  ngOnInit(): void {
    this.accounts.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users)
    })
  }

  firstClick(){
    console.log("Clicked");
  }

}
