//Title: Assignment 3 - Restaurant App
//Author: Kayla McDanel
//Date: 1 June 2022
//Description: Project to create cards with menu items and prices
//that offers an order total.

import { Product } from "./product.js";

export class Appetizer extends Product {
    
    constructor(name, price) {
        super(name, price);
    }
}