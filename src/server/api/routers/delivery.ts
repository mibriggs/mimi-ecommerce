import { router } from '../trpc';

export const deliveryRouter = router({
	// createDelivery/updateDelivery/getDelivery/deleteDelivery should all be protectedRoutes
	// probably want a convenience endpoint to getAllDeliveries
});
