import styles from "../styles/CardButton.module.css"
import { useAppContext } from "./stateWrapper"

const CardButton = ({item}) => {
    const cart = useAppContext()
    const handleClick = () =>{
        cart.addItemToCart(item)
    }
    return (
        <button
            onClick={handleClick}
            className={styles.button}
        >
            Add to cart
        </button>
    )
}

export default CardButton