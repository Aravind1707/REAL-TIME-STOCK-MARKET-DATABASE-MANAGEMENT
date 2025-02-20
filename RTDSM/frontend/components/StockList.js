import React, { useEffect, useState } from "react";
import { fetchStocks, buyStock } from "../api";

const StockList = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetchStocks().then(data => setStocks(data));
    }, []);

    return (
        <div>
            <h2>Stock Market</h2>
            <ul>
                {stocks.map(stock => (
                    <li key={stock.id}>
                        {stock.company} ({stock.symbol}) - ${stock.price}
                        <button onClick={() => buyStock(1, stock.id, 10)}>Buy</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockList;
