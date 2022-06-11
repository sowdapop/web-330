//Title: Assignment 3 - Restaurant App
//Author: Kayla McDanel
//Date: 1 June 2022
//Description: Project to create cards with menu items and prices
//that offers an order total.

export class Bill {

    constructor(_beverages, _appetizers, _mainCourses, _desserts)

{
this._beverages = [];
this._appetizers = [];
this._mainCourses = [];
this._desserts = [];
}


addBeverage(beverage){
    this._beverages.push(beverage);
}

addAppetizer(appetizer){
    this._appetizers.push(appetizer);
}

addMainCourse(mainCourse){
    this._mainCourses.push(mainCourse);
}

addDessert(dessert){
    this._desserts.push(dessert);
}

getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(function(beverage)
    {
        total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function(appetizer)
    {
        total += parseFloat(appetizer.price);
    });

    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
    {
        total += parseFloat(mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(function(dessert)
    {
        total += parseFloat(dessert.price);
    });

    console.log('The total is $[total]');

    return total.toFixed(2);
}

}