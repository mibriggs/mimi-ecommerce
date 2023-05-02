const ProductCard = () => {
    return (
        <div className="bg-white text-gray-900 w-fit flex flex-col flex-wrap items-center m-8 p-5 rounded-2xl">
            <h1>Product Name</h1>
            <div>Product Image?</div>
            <div>Product Description</div>
            <div>Price?</div>
            <div className="flex flex-row">
                <button className="w-8 bg-red-600 rounded-md"> - </button>
                <text>Quantity Button</text>
                <button className="w-8 bg-green-600 rounded-md"> + </button>
            </div>
            <div>Add to cart</div>
        </div>
    );
};

export default ProductCard;
