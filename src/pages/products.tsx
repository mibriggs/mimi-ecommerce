import ProductCard from '@/components/product-card';

const ProductsPage = () => {
	//! I dont like how im handling colors rn. Come back and fix
	return (
		<div className='flex flex-col bg-eggshell md:bg-oceanview'>
			<h1>Products Page</h1>
			<div className='flex flex-row flex-wrap justify-around'>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};

export default ProductsPage;
