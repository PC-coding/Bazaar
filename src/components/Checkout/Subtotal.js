import React from 'react';
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from '../Util/StateProvider';
import { getBasketTotal } from '../Util/reducer';
import { useHistory } from 'react-router-dom';

export default function Subtotal(){
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return(
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{` ${value}`}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}