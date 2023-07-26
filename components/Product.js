import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Product.module.css"
import { convertToPath } from "../lib/utils"
import CardButton from "./cardButton"

const Product = ({item,showAs, qty}) => {
    const {id,title,description,price,image} = item
    if(showAs === "Page"){
        return (
            <div className={styles.page}>
                <div>
                    <Image src={image} alt={description} width={800} height={800} />
                </div>
                <div className={styles.info}>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.price}>${price}</div>
                    <div>{description}</div>
                    <div>
                        <CardButton item={item} />
                    </div>
                </div>
                
            </div>
        )
    }

    if(showAs === "ListItem"){  
        return (
            <div className={styles.listItem}>
                <div>
                    <Image src={image} alt={description} width={100} height={100} />
                </div>
                <div>
                    <div>{title} </div>
                    <div>${price}</div>
                    {qty === 0 ? "" : <div>Qty: {qty} units</div>}
                    {qty === 0 ? "" : <div>Subtotal $:{qty * price}</div>}
                </div>
            </div>    
        )
    }

    return (
    <div className={styles.item}>
        <div>
            <Link href={`/store/${convertToPath(title)}`}>
                <Image src={image} alt={description} width={200} height={200} />
            </Link>
        </div>

        <div>
            <h3>
                <Link href={`/store/url-a-mi-componente`}>
                    {title}
                </Link>
            </h3>
        </div>

        <div>${price}</div>
        <div>
            <CardButton item={item} />
        </div>
    </div>
    )
}

export default Product