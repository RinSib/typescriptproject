import React, {useEffect, useState} from 'react';
import './App.css';
import ProductList from "./components/ProductList";
import {IGoods, IItem, IMeta} from "./types/types";
import axios from "axios";
import SettingsSelect from "./components/SettingsSelect";

// export interface TypePage{
//     page: number;
//     currentPage: number;
// }
function App() {
    const[items, setItems] = useState<IItem[]>([]);
    const [page, setPage] =useState(1)
    const [pages, setPages] = useState<number[]>([]);

    useEffect(() => {
        fetchItems(1)
    }, [])

    const newPages:number[]=[];

    async function fetchItems(currentPage: number){
        try{
            const url = "https://api.bml.true-cms.ru/api/goods" + `?page = ${currentPage}`
            const response = await axios.get<IGoods>(url)
            setItems(response.data.items)

            for(let i= 1; i<= response.data.meta.lastPage; i++){
                newPages.push(i)
            }
            await setPages(newPages)

        }
        catch(e){
            console.log(e)
        }
    }

  return (
    <div className="App">
        <SettingsSelect defaultValue={"Sort by"} options={["Recommented", "High price", "Low Price"]}/>

        <section className="category__wrapper">
            <div className="category-filter"></div>

            <div className="catalog">
                <ProductList items={items}/>
            </div>


        </section>
        <div>
            {pages.map((page) => { return(
                <button>{page}</button>)  }
            )}
        </div>




    </div>
  );
}

export default App;
