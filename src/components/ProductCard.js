import React from 'react';
import styles from '../styles/productCard.module.css';
import defaultImage from '../images/default.png';

function ProductCard() {
    return(
        <div class={styles.productCard}>
            <div class={styles.productImage}>
                <img src={defaultImage} />
            </div>

            <div class={styles.productDetails}>
                <div>Product Name</div>
                <div class={styles.priceText}>GH¢1000</div>
            </div>

        </div>
    )                                           
}

export default ProductCard; 