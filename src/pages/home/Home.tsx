import React, { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductsService } from '../../services/ProductsService'
import Layout from '../../components/Layout/Layout'
import ProductItem from '../../components/ProductItem/ProductItem'

const Home: FC = () => {
	const { data: products, isLoading } = useQuery(
		['products'],
		() => ProductsService.getProducts(),
		{
			select: ({ products }) => products
		}
	)

	return (
		<Layout title='Shop the collection'>
			{isLoading ? (
				<div className='text-blue-400 text-2xl'>Loading...</div>
			) : products?.length ? (
				<div className='grid__wrapper'>
					{products.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>Products not found</div>
			)}
		</Layout>
	)
}

export default Home
