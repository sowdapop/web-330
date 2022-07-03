//Title: finance-calculator.js
//Author: Kayla McDanel
//Date: 7/3/22
//Description: JS file that calculates monthly payments based on
//value and interest rate.

import { months } from "moment";

export class FinanceCalculator{
    static MONTHS_IN_A_YEAR = 12;
    static calculateFutureValue(monthlyPayment, rate, years){
        let month = years * FinanceCalculator.MONTHS_IN_A_YEAR;
        let interestRate = 1 + rate/100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * (Math.pow(interestRate, month));
        return futureValue.toFixed(2);
        console.log(futureValue)
    }

    static convertToCurrency(field){
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });
        return currencyFormatter.format(field);
    }
}