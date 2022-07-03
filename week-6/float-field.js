//Title: float-field.js
//Author: Kayla McDanel
//Date: 7/3/22
//Description: JS file that also requires input.

export class FloatField{
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    validate(){
        let check = parseFloat(this.field);
        return !isNaN(check);
    }
    getMessage(){
        return `${this.name} must be a float value. You entered ${this.field}.`
    }
}