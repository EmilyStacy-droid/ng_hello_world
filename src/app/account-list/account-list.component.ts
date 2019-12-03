import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../services';
import {Account} from '../models';

@Component({
  selector: 'am-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
    accounts:Account[]
  constructor(private accountsService:AccountsService ) {
         
   }    

  ngOnInit() {
    this.accounts = this.accountsService.getAll();
  }

}
