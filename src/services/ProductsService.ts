import axios from 'axios'
import { IProduct, IProductsResponse } from '../types/IProduct'

export const ProductsService = {
	async getProducts() {
		const response = await axios.get<IProductsResponse>(
			'https://dummyjson.com/products',
			{
				params: {
					limit: 20
				}
			}
		)
		return response.data
	},
	async getProductsById(id: string) {
		const response = await axios.get<IProduct>(
			`https://dummyjson.com/products/${id}`
		)
		return response.data
	}
}
