export interface IAccount {
    id:number;
    name:string;
    email:string;
    isEmployee:boolean;
    // only use any in extreme case or set it up as null
    //departmentId:null works too
    departmentId:number;
    // create an array with any type
    //phoneNumbers:[] works too
    // phoneNumbers:{
    //     number:string;
    //     type:string;
    // }[]; => not fancy way

    phoneNumbers:IPhoneNumber[];
}

export interface IPhoneNumber {
    number:string;
    type:string;
}


// testing the type:
// let x: IAccount;
// x.phoneNumber.type => should return a type; in this case the data type is string
