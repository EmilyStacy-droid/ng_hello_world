import { IAccount, IPhoneNumber } from './iaccount';

export class Account implements IAccount {
    id: number;
    name: string;
    email: string;
    isEmployee: boolean;

    departmentId: number;

    phoneNumbers: IPhoneNumber[];

    //the reason to have two seperate classes:IAccount and Account
    getDescription():string{
        return  `${this.name} <${this.email}>`;
    }

    constructor(account: IAccount) {
        if (account) {
            this.id = account.id;
            this.name = account.name;
            this.email = account.email;
            this.isEmployee = account.isEmployee;
            this.departmentId = account.departmentId;
            this.phoneNumbers = account.phoneNumbers;
        }
    }

}

