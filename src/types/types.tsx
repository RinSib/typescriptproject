export interface IGoods{
    items: IItem[];
    meta: IMeta;
}
export interface IItem{
    id: string;
    name: string;
    image: string;
    price: number;
    currencyTitle: string;
}

export interface IMeta{
    currentPage: number;
    lastPage: number;
    total: number;
}



