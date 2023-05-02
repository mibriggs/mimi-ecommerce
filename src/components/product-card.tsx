import { useState } from "react";

const ProductCard = () => {
    const [quantity, setQuantity] = useState(0);
    const updateQuantity = (isIncrease: boolean) => {
        if (isIncrease) {
            if (quantity < 100) {
                setQuantity(quantity+1);
            }
        }
        else {
            if (quantity > 0) {
                setQuantity(quantity-1);
            }
        }
        // isIncrease? setQuantity(quantity+1) : setQuantity(quantity-1);
    }
    return (
        <div className="bg-white text-gray-900 w-fit flex flex-col flex-wrap items-center m-8 p-5 rounded-2xl">
            <h1>Product Name</h1>
            <div>Product Image?</div>
            <div>Product Description</div>
            <div>Price?</div>
            <div className="flex flex-row">
                <button className="w-8 bg-red-600 rounded-md" onClick={() => updateQuantity(false)}> - </button>
                <div>{quantity}</div>
                <button className="w-8 bg-green-600 rounded-md" onClick={() => updateQuantity(true)}> + </button>
            </div>
            <div>Add to cart</div>
        </div>
    );
};

export default ProductCard;
