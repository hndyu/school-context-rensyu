import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import classes from "./ProductCart.module.css";

const ProductCart = ({ title, price }) => {
    const { addItems } = useContext(CartContext);

    return (
        <div className={classes.cart_item}>
            <p>{title}</p>
            <p>税込み{price}円</p>
            <button className={classes.cart_button} onClick={() => addItems(title, price)}>カートに追加</button>
        </div>
    )
}

export default ProductCart