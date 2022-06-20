// Title: Assignment 4 - Calorie App
// Author: Kayla McDanel
// Date: 19 June 2022
// Description: App that counts calories


// imports the FoodModel function
import { FoodModel } from './food-model.js';

//Creates the calorie converter
export class CalorieConverter { 
    static data = [
        new FoodModel (1007, 'Egg', 78),
        new FoodModel (1008, 'Apple', 95),
        new FoodModel (1009, 'Hamburger', 354),
        new FoodModel (1010, 'Fries', 400),
        new FoodModel (1011, 'Banana', 105),
        new FoodModel (1012, 'Soda', 150),
    ];

static find(str) {
    return this.data.filter((data) => {
        if (str.includes(data.name.toLowerCase())) {
        return data;
        }
    });
    }
}