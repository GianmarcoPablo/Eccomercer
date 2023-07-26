import Layout from "../../components/Layout"
import { getItems } from "../../services/itemService"
import Product from "../../components/Product"
import styleItems from "../../styles/Product.module.css"

const Index = ({products}) => {
	console.log(products)
	return (
		<Layout>
			<h1>Store</h1>
			<div className={styleItems.items}>
				{products && 
					products.map(item=>(
						<Product key={item.id} item={item} showAs="Default" />
				))}
			</div>
		</Layout>
	)	
}
export default Index

export const getStaticProps = async () => {
	const res = await getItems()
	return {
		props: {
			products: res
		}
	}
}


