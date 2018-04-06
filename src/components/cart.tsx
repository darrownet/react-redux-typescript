import * as React from 'react';

import { CartItem, ShoppingCart } from '../interfaces/shopping-interfaces';

interface Props {
  removeFromCart: (value: CartItem) => void;
  updateQuantity: (value: CartItem) => void;
  cart: ShoppingCart;
}

const Cart: React.SFC<Props> = (props) => {

  const onRemoveCartItem = (cartItem: CartItem): void => {
    props.removeFromCart(cartItem);
  };

  const onUpdateCartItem = (cartItem: CartItem, input: HTMLInputElement): void => {
    cartItem.qty = parseInt(input.value, 10);
    props.updateQuantity(cartItem);
  };

  const totalCartValue = (cart: ShoppingCart): number => {
    let total: number = 0;
    cart.forEach((item: CartItem) => {
      total += item.product.prodPrice * item.qty;
    });
    return total;
  };

  const refs: any = new Map();

  return (
      <div className="shopping-cart">
        <h1>SHOPPING CART</h1>
        <ul>
          {props.cart.map((item: CartItem, idx: number) => {
            return (
                <li key={idx}>
                  <div className={`cart-prod-box ${item.product.prodColor}`} />
                  <div className="cart-prod-info">
                    <strong>{item.product.prodName}</strong>
                    <p>${item.product.prodPrice}</p>
                  </div>
                  <div className="cart-prod-contol">
                    <input
                        ref={input => refs.set(`input${idx}`, input)}
                        type="number"
                        value={item.qty}
                        onChange={() => {
                          onUpdateCartItem(item, refs.get(`input${idx}`));
                        }}
                    />
                    <button
                        onClick={() => {
                          onRemoveCartItem(item);
                        }}
                    >remove
                    </button>
                  </div>
                </li>
            );
          })}
        </ul>
        <hr />
        <h2>Total Price: ${totalCartValue(props.cart)}</h2>
      </div>
  );

};

export default Cart;
