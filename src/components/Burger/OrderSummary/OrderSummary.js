import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component s well.
    // componentDidUpdate(){
    //     console.log("Order summary updated!");
    // }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
                {this.props.ingredients[igKey]}
            </li>);
        });
        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancelPurchase}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continuePurchase}>CONTINUE</Button>
            </Auxiliary>
        );
    }
};

export default OrderSummary;