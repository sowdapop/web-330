//Title: float-min-field.js
//Author: Kayla McDanel
//Date: 7/3/22
//Description: JS file that assesses input compared to the min value.

export class FloatMaxField{
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }
    validate(){
        let field = parseFloat(this.field);
        return (field > this.min);
    }
    getMessage(){
        return `${this.name} must be more than ${this.min}. You entered ${this.field}.`
    }
}