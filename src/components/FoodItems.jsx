import FoodItem from "./FoodItem";

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
                />
            ))
        }
        </div>
    );
}

export default FoodItems;