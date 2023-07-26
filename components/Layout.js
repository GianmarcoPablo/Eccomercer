import Head from "next/head"
import Menu from "./Menu"
import styles from "../styles/Layout.module.css"
import ShoppingCard from "./ShoppingCard"


const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>GitHub Merch  {title ? `| ${title}` : ""} </title>
                <meta name="description" content="GitHub Merch Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu />

            <div className={styles.container}>
                {children}
            </div>

            <ShoppingCard />
        </div>
    )
}

export default Layout