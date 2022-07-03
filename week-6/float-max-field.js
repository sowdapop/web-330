//Title: float-max-field.js
//Author: Kayla McDanel
//Date: 7/3/22
//Description: JS file that assesses input compared to the max value.

export class FloatMaxField{
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }
    validate(){
        let field = parseFloat(this.field);
        return (field < this.max);
    }
    getMessage(){
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`
    }
}