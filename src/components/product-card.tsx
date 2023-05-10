import { useState } from 'react';
import EditQuantityButton from './edit-quantity';

const ProductCard = () => {
	const [quantity, setQuantity] = useState<number>(0);

	const updateQuantity = (isIncrease: boolean) => {
		if (isIncrease) {
			if (quantity < 100) {
				setQuantity(quantity + 1);
			}
		} else {
			if (quantity > 0) {
				setQuantity(quantity - 1);
			}
		}
	};

	return (
		<div className='m-8 flex w-fit flex-col flex-wrap items-center rounded-2xl bg-white p-5 text-gray-900'>
			<h1>Product Name</h1>
			<div>Product Image?</div>
			<div>Product Description</div>
			<div>Price?</div>
			<div className='flex flex-row'>
				<button
					className='w-8 rounded-md bg-red-600'
					onClick={() => updateQuantity(false)}
				>
					-
				</button>
				{/* <EditQuantityButton color="red-600" isIncrease={true} symbol="-" /> */}
				<div>{quantity}</div>
				{/* <EditQuantityButton color="green-600" isIncrease={true} symbol="+" /> */}
				<button
					className='w-8 rounded-md bg-green-600'
					onClick={() => updateQuantity(true)}
				>
					+
				</button>
			</div>
			<button>Add to cart</button>
		</div>
	);

export default ProductCard;
