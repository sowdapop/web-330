    //Title: Assignment 5
    //Author: Kayla McDanel
    //Date: 23 June 2022
    //Description: Shopping cart app


export class ShoppingCart  {
    constructor(_products){
        this._products = {};
        }

    count(){
    return this._products.length;
}

add(products){
    this._products.push(products);
}

*iterator(){
    for(let i of this._products)
    yield i;
}

}