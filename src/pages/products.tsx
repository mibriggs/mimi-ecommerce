import ProductCard from '@/components/product-card';

const ProductsPage = () => {
	return (
		<div className='flex flex-col'>
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
