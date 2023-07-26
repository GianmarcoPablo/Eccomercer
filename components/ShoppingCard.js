import { useAppContext } from "./stateWrapper"
import Product from "./Product"
import styles from "../styles/ShoppingCard.module.css"

const ShoppingCard = () => {
    const cart = useAppContext()
    const { isOpen, items, closeCard } = cart

    const getTotal = () => {
        const total = items.reduce((acc,item)=>acc + item.price * item.quantity,0)
        return total
    }
    return (
        <div className={styles.shoppingCart} style={ {display: isOpen ? "block" : "none"} } >
            <button className={styles.close} onClick={closeCard}>Close</button>
            {items.length === 0 ? <div className={styles.empty}>Card is empty</div> : (
                <>
                    <h3>Your Items</h3>
                    <div>
                        {items.map(item=>(
                            <Product
                                key={item.id}
                                item={item}
                                showAs="ListItem"
                                qty={item.quantity}
                            />
                        ))}
                    </div>
                    <div className={styles.total}>
                        Total: ${getTotal()}
                    </div>
                </>
            )}
            
            
        </div>  
    )
}

export default ShoppingCard