import { useState, useEffect } from "react";
import FoodItems from "./components/FoodItems";

import './style/index.css';

const App = () => {
    const[dish, setDish] = useState([]);

    useEffect(() => {
        const getDishes = async() => {
            const dishesFromServer = await fetchDishes();
            setDish(dishesFromServer)
        }
        getDishes();
    }, [])

    const fetchDishes = async () => {
        const res = await fetch('http://localhost:5000/Dishes')
        const data = await res.json();
        console.log(data)

        return data;
    }

    return(
        <FoodItems foodItems = { dish }/>
    );
}

export default App;