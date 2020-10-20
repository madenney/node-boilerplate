
import styles from './Footer.module.scss'

const Footer = props => {
    return (
        <div className={styles.footer}>
            <div className={styles.text}>&copy; 2020 Prism Fabrication</div>
        </div>
    )
}

export default Footer;