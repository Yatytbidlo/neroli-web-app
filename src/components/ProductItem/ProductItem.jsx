import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css'


const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
            <div className={'product' + className}>
                <div className={'img'}><img src={'https://static.tildacdn.com/tild3336-6664-4333-a165-323562336134/IMG_8264_1_2_1.png'}/></div>
                <div className={'title'}><b>{product.title}</b></div>
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