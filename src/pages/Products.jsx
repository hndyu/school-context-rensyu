import React from 'react'
import ProductCart from './ProductCart';

const Products = () => {
    const productList = [
        {
            title: "HTMLとCSSを学ぼう",
            price: 1000,
        },
        {
            title: "JavaScript基礎講座",
            price: 1500,
        },
        {
            title: "Pythonでデータ分析",
            price: 2000,
        },
    ];
    return (
        <div>
            <h1>商品一覧</h1>
            {productList.map((product, index) => (
                <ProductCart title={product.title} price={product.price} key={index} />
            ))}
        </div>
    )
}

export default Products