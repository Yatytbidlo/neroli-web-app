import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css'


const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
            <div className={'product' + className}>
                <div className={'title'}><b>{product.title}</b></div>
                <div className={'img'}>
                    <img src={product.img}/>
                </div>
                <div className={'description'}>{product.description}</div>
                <div className={'price'}>
                    <span><b>{product.price}</b> ₸</span>
                </div>
                <Button className={'add-btn'} onClick={onAddHandler}>Добавить в корзину
                </Button>
            </div>
    );
};

export default ProductItem;