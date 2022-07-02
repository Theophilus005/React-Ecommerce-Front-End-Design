import React from 'react';
import styles from '../styles/categoryPanel.module.css'

function CategoryPanel() {
    return(
        <div class={styles.categoryPanel}>
            <div class={styles.categoryHeader}>Category</div>
            <div class={styles.categoryList}>
                <div>Laptops</div>
                <div>Phones</div>
                <div>Accessories</div>
                <div>Accessories</div>
                <div>Accessories</div>
            </div>
        </div>
    )
}

export default CategoryPanel;