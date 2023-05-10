type EditQuantityButtonProps = {
	color: string;
	isIncrease: boolean;
	symbol: string;
};

const EditQuantityButton = (props: EditQuantityButtonProps) => {
	//     const updateQuantity = (isIncrease: boolean) => {
	//         if (isIncrease) {
	//             if (quantity < 100) {
	//                 setQuantity(quantity+1);
	//             }
	//         }
	//         else {
	//             if (quantity > 0) {
	//                 setQuantity(quantity-1);
	//             }
	//         }
	//     }

	return (
		// <button className="w-8 bg-green-600 rounded-md" onClick={() => updateQuantity(true)}> + </button>
		<button className={`w-8 bg-${props.color} rounded-md`}>
			{props.symbol}
		</button>
	);

export default EditQuantityButton;
