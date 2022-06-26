    //Title: Assignment 5
    //Author: Kayla McDanel
    //Date: 23 June 2022
    //Description: Shopping cart app

class CartComponent extends HTMLElement {
    constructor(){
        super();
    }

connectedCallback(){
    this.innerHTML = `
    <i id="cartIcon" class="fa fa-shopping-cart"></i> (span id="cart-count"></span>);
    `
}
}

customElements.define("cart-component", CartComponent);