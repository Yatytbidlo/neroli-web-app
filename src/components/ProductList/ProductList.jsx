import React from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem"
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Пробник', price: 4990, description: '40 пшиков на 7 дней'},
    {id: '2', title: '30мл', price: 35000, description: '120 пшиков на 60 дней +в подарок новинка пробник "Grape"'},
    {id: '3', title: '50мл', price: 75000, description: '200 пшиков на 100 дней +в подарок новинка пробник "Grape"'}
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        const {tg} = useTelegram()
        let newItems = []

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить за ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                product={item}
                onAdd={onAdd}
                className={'item'}
                />
            ))}
            <p className={'delivery'}>Доставка бесплатная!</p>
        </div>
    );
};

export default ProductList;