import {Injectable} from '@angular/core';
import {Account} from "../models";

@Injectable({
    providedIn:'root'
})
export class AccountsService {
    private accounts:Account[] = [
        new Account({
            id:1,
            name:'Emily',
            email:'emily.stacy@improving.com',
            isEmployee:true,
            departmentId:0,
            phoneNumbers:[]
        }),

        new Account({
            id:2,
            name:'Skyler',
            email:'skyler.tweedie@improving.com',
            isEmployee:true,
            departmentId:0,
            phoneNumbers:[]
        }

        ),
        new Account({
            id:3,
            name:'Rachel',
            email:'rachel.sulliven@improving.com',
            isEmployee:true,
            departmentId:0,
            phoneNumbers:[]
        }

        ),
    ];

    getAll():Account[] {
        return this.accounts;
    }

    //it is always good to have a returned type claimed in the beginning
    get(id:number):Account {
        for(let ii = 0, len=this.accounts.length; ii<len; ii++) {
            if(this.accounts[ii].id === id) {
                return this.accounts[ii];
            }
        }

        return null;
    }

}