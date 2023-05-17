import { router } from '../trpc';

export const productRouter = router({
	// createProduct/updateProduct/getProduct/deleteProduct should all be protectedRoutes where specifically they are admins
	// probably want a convenience endpoint to getAllProducts
});
