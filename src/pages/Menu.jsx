import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import classes from "./Menu.module.css";

const Menu = () => {
    const state = useContext(CartContext);

    return (
        <div>
            <nav className={classes.nav}>
                <Link className={classes.nav_link} to={"/"}>タイトル</Link>
                <Link className={classes.nav_link} to={"/cart"}>
                    カート:<span>{state.items.length}</span>
                </Link>
            </nav>
        </div>
    )
}

export default Menu