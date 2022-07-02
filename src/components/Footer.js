import React from 'react';
import styles from '../styles/footer.module.css';
import facebookIcon from '../images/icons/facebook.svg';
import instagramIcon from '../images/icons/instagram.svg';
import whatsappIcon from '../images/icons/whatsapp.svg';

function Footer() {

    function getDate() {
        const d = new Date();
        let year = d.getFullYear();
        return year;
    }

    return(
        <div class={styles.footer}>
            <div class={styles.leftDiv}>
                <div class={styles.leftDivContainer}>
                <div class={styles.businessName}>All Mighty Computer Aid</div> 
                <div class={styles.socialMediaText}>Our social media handles</div> 
                <div class={styles.socialMediaIcons}>
                    <img src={facebookIcon}></img>
                    <img src={instagramIcon}></img>
                    <img src={whatsappIcon}></img>
                </div> 
                <div class={styles.location}>
                    Location: fsfsfslfsfsdfasfsafaf    
                </div> 

                <div class={styles.contact}>
                    Contact: 0263954512    
                </div> 

                <div class={styles.copyright}>
                    &copy; All Mighty Computer Aid {getDate()}    
                </div>  
            </div>
            </div>

            <div class={styles.rightDiv}>
                <div class={styles.adminLogin}>
                        <div class={styles.adminText}>Administrator Login</div>
                        
                        <div class={styles.emailField}>
                            <div class={styles.emailText}>Email</div>
                            <input type="email" />
                        </div>

                        <div class={styles.passwordField}>
                            <div class={styles.passwordText}>Password</div>
                            <input type="password" />
                        </div>
                </div>
            </div>

        
        </div>
    )
}

export default Footer;