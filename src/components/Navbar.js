
import Link from "next/link";
import styles from './Navbar.module.scss'

import { Navbar, Nav }  from 'react-bootstrap';
//import logo from "../images/logo_title_transparent.png"

const NavBar = props => {
    return (
        <Navbar bg="light" expand="md" className={styles.navbar}>
            <Navbar.Brand><Link href="/home"><img className={styles.logo} src="/logo_title_transparent.png" alt="logo"/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={styles.nav + " mr-auto"} activeKey={props.pathname}>
                <Nav.Link eventKey="/" className={styles.navItem}><Link href="/"><div>Catalog</div></Link></Nav.Link>
                <Nav.Link eventKey="/dtpart" className={styles.navItem}><Link href="/dtpart"><div>Drawing to Part</div></Link></Nav.Link>
                <Nav.Link eventKey="/customwork" className={styles.navItem}><Link href="/customwork"><div>Custom Work</div></Link></Nav.Link>
                <Nav.Link eventKey="/gallery" className={styles.navItem}><Link href="/gallery"><div>Gallery</div></Link></Nav.Link>
                <Nav.Link eventKey="/guides" className={styles.navItem}><Link href="/guides"><div>Guides</div></Link></Nav.Link>
                <Nav.Link eventKey="/about" className={styles.navItem}><Link href="/about"><div>About</div></Link></Nav.Link>
                </Nav>
                <Nav className={styles.login}>
                    <Nav.Link eventKey="/login" className={styles.navItem}><Link href="/login"><div>Login</div></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;