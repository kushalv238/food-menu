import FoodItem from "./FoodItem";
import '../index.css';

const FoodItems = ({ foodItems }) => {
    return(
        <div className="container">
        {
            foodItems.map((foodItems) => (
                <FoodItem
                    key = {foodItems.id}
                    foodItems = {foodItems}
                    cuisineType = {
                        foodItems.veg ? 'green' : 'red'
                    }
                >

                </FoodItem>
            ))
        }
        </div>
    );
}

export default FoodItems;