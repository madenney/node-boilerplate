
import NavBar from "./Navbar";
import LeftBar from "./LeftBar";
import Footer from "./Footer";
import styles from "./Layout.module.scss"
import { useRouter } from 'next/router'

const pagesWithLeftBar = ['/','/home','/gallery','/catalog','/guides'];

const Layout = props => {
    
    const pathname = useRouter().pathname
    let showLeftBar = 
        pagesWithLeftBar.indexOf(pathname) > -1 || pathname.startsWith('/product')

    // TODO: For mobile friendliness
    // if( typeof window != "undefined"){
    //     if(window.outerWidth < 500) showLeftBar = false;
    // }
    
    return (
        <div>
            <NavBar pathname={pathname}/>
            <div className={"d-flex"}>
                {showLeftBar ? <LeftBar className=""/> : "" }
                <div className={styles.mainContent}>
                    {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;
