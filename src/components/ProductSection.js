import React from 'react';
import styles from '../styles/productSection.module.css';
import ProductCard from './ProductCard';

function ProductSection({section}) {
    return (
        <div class={styles.productSection}>
            <div class={styles.productSectionInner}>
                <div class={styles.productSectionHeader}>
                    <div>{section}</div>
                    <div>See more</div>
                </div>

                <div class={styles.products}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  
                </div>

            </div>
        </div>
    )
}

export default ProductSection;