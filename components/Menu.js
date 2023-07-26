import Link from "next/link"
import styles from "../styles/Menu.module.css"
import { useAppContext } from "./stateWrapper"

const Menu = () => {
    const cart = useAppContext()
    const handleOpenCard = (e) =>{
        cart.openCard()
    }
    return (
        <nav className={styles.menu}>
            <div>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/store">Store</Link>
                <Link className={styles.link} href="/faq">FAQ</Link>
            </div>
            <div>
                <Link
                    href="#"
                    onClick={handleOpenCard}
                >Card({cart.getNumberOfItems()})
                    
                </Link>
            </div>
        </nav>
    )
}

export default Menu