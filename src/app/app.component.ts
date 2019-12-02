import { Component, OnInit } from '@angular/core';
import {AccountsService} from './services';
import {Account} from './models';

// @NgModule(
//   {
//     bootstrap:[AppComponent];
//   }
// )

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private accountsService = new AccountsService();

  accounts: Account[]
  ngOnInit(){
    this.accounts = this.accountsService.getAll();
  }

  margin = "margin";
  contextCenter = "contextCenter";
  styleName= 'green center';
  title = 'ng-hello-world';
  message = 'this is Emily';

  changeColor(color:string) {
    this.styleName = color + " " + "center";
    alert('Hello World!');
  }

  
}

