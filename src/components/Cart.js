import React from "react";
import { useSelector } from "react-redux";

function Cart() {
    const items = useSelector((state) => state.items);
    const totalPrice = useSelector((state) => state.totalPrice);

    return (
        <div className="Cart">
            <div className="cart__leftcontainer">
                {items.map((item) => (
                    <div className="cart__item">
                        <div className="cartitem__row">
                            <img
                                src={item.item_imageurl}
                                alt="food img"
                                className="cart__item__image"
                            ></img>
                            <p className="cart__item__name">{item.item_name}</p>
                        </div>
                        <div className="cartitem__row">
                            <p className="cart__item__res">{item.res_name}</p>
                            <p className="cart__item__price">₹ {item.price}</p>
                        </div>
                        <div className="remove__button__container">
                            <button className="cart__remove__button">
                                Remove From Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart__rightcontainer">
                <p className="cart__totalprice">
                    Cart Total:{" "}
                    <span className="cart__totalamount">₹ {totalPrice}</span>
                </p>
                <button className="cart__proceed__button">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
