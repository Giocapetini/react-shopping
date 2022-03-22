import React from 'react'
import './receipt.scss';

class Receipt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // history: [{ squares: Array(9).fill(null), }], stepNumber: 0, xNext: true,
        }
    }

    render() {
        return (
            // *ngFor="let item of receiptItems"
            <div className="receipt-container">
                {/* *ngIf="item.selectedAmount > 0" */}
                <div className="receipt-item">
                    {/* {item.itemName} */}
                    <h2>itemName</h2>
                    {/* {item.itemValue} */}
                    <p className="item-value">itemValue</p>
                    {/* {item.selectedAmount} */}
                    <p className="selected-amount">X 3</p>
                    {/* {roundNumber(item.itemValue * item.selectedAmount)} */}
                    <p className="item-total"> 10.00</p>
                </div>
                <hr></hr>
                <div className="total-container">
                    {/* {calcTotal()} */}
                    Total:
                    Total with Tax:
                </div>
            </div>
        );
    }
}

export default Receipt;