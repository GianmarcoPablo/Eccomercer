import Layout from "../../components/Layout"
import { getItemsData, getPathsFromIds } from "../../lib/utils"
import Product from "../../components/Product"

const ProductPage = ({productInfo}) => {
    console.log(productInfo)
    return (
        <Layout>
            <Product item={productInfo.data} showAs="Page" />
        </Layout>
    )
}

export default ProductPage

export const getStaticPaths = async () => {
    const paths = await getPathsFromIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const id = params.id
    const product = await getItemsData(id)

    return {
        props: {
            productInfo: product
        }
    }
}