//Title: required-field.js
//Author: Kayla McDanel
//Date: 7/3/22
//Description: JS file that requires input.

export class RequiredField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    validate(){
        let valid = Boolean(this.field);
        if (valid){
            valid = Boolean(this.field.trim());
        }
        return valid;
    }
    getMessage(){
        return `${this.name} is a required field.`
    }
}