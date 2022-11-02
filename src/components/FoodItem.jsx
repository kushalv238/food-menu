import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";

const FoodItem = ({ foodItems, cuisineType }) => {
    return(
        <div className="fItem">
            <p><FontAwesomeIcon color={cuisineType} icon={faDiceOne} /> <span className="cuisine">{foodItems.cuisine}</span></p>
            <div className="cuisineImg">
                <img src={foodItems.img} alt={foodItems.name} />
                <p>{foodItems.tag}</p>
            </div>
            <div className="cuisineInfo">
                <p>{foodItems.name}</p>
                <div className="pricing">
                    <p>₹{foodItems.price}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;