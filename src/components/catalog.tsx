import * as React from 'react';

import { CartItem, Product, ProductCatalog } from '../interfaces/shopping-interfaces';

interface Props {
  addToCart: (value: CartItem) => void;
  catalog: ProductCatalog;
}

const Catalog: React.SFC<Props> = (props) => {

  const onAddProductToCart = (product: Product, input: HTMLInputElement): void => {
    let cartItem: CartItem = {product, qty: parseInt(input.value, 10)};
    props.addToCart(cartItem);
    input.value = '1';
  };

  const onInputFocus = (e: React.FormEvent<HTMLInputElement>): void => {
    e.currentTarget.value = '';
  };

  const onInputBlur = (e: React.FormEvent<HTMLInputElement>): void => {
    if (!e.currentTarget.value || e.currentTarget.value === '0') {
      e.currentTarget.value = '1';
    }
  };

  const refs: any = new Map();

  return (
      <div className="shopping-catalog">
        <h1>SHOPPING CATALOG</h1>
        <ul>
          {props.catalog.map((item: Product, idx: number) => {
            return (
                <li key={idx}>
                  <div className={`prod-box ${item.prodColor}`} />
                  <div className="prod-info">
                    <h3>{item.prodName}</h3>
                    <p>${item.prodPrice}</p>
                    <input
                        ref={input => refs.set(`input${idx}`, input)}
                        type="number"
                        defaultValue="1"
                        onFocus={onInputFocus}
                        onBlur={onInputBlur}
                    />
                    <button
                        onClick={() => {
                          onAddProductToCart(item, refs.get(`input${idx}`));
                        }}
                    >add to cart
                    </button>
                  </div>
                </li>
            );
          })}
        </ul>
      </div>
  );
};

export default Catalog;