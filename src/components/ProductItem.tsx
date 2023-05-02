import React, {FC} from 'react';
import {IItem} from "../types/types";

interface ProductItemProps{
    item: IItem;
}
const ProductItem: FC<ProductItemProps> = ({item}) => {
    return (
        <li>
            <span className="card-image">{item.image}</span>
            <div className="card-bottom">
                <h2 className="card-bottom__heading">READYTOWEAR BY BLM</h2>
                <span className="card-bottom__name">{item.name}</span>
                <span className="card-bottom__price">{item.price}{item.currencyTitle}</span>
            </div>

        </li>
    );
};

export default ProductItem;