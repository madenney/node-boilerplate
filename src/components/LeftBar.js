import styles from './LeftBar.module.scss'
import products from "../../constants/products.json"
import Link from "next/link";

const LeftBar = props => (
    <div className={`d-none d-lg-block d-inline-flex `+ styles.leftBar}>
        <div className={styles.title}>Catalog</div>
        <div className={styles.divider}></div>
        <ul className={styles.productList}>
            { products.map(product => {
                return (
                    <Link href={`/product/${product.id}`}
                        key={product.id} >
                        <li 
                            className={styles.productItem}
                        >{product.name}</li>
                    </Link>
                )
            })}
        </ul>
    </div>
)

export default LeftBar;