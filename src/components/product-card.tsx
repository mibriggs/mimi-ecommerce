const ProductCard = () => {
    return (
        <div className="bg-white text-gray-900 w-fit flex flex-col flex-wrap items-center m-8 p-5 rounded-2xl">
            <h1>Product Name</h1>
            <div>Product Description</div>
            <div className="flex flex-row">
                <button className="w-8 bg-red-600/75 rounded-md"> - </button>
                <div>Quantity Button</div>
                <button className="w-8 bg-green-600 rounded-md"> + </button>
            </div>
        </div>
    );
};

export default ProductCard;
