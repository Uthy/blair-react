import { motion } from "framer-motion";

function OffCanvasMenu(props) {

    const MenuLinks = [
        {
            title: 'Home',
            url: '/',
        }, 
        {
            title: 'About',
            url: '/about',
        }, 
        {
            title: 'Work',
            url: '/portfolio',
        }, 
    ]

    return (
        <motion.div className="offcanvas-menu"
        initial={{x: '100vw'}}
        animate={{x:0}}
        transition={{duration: 0.5, ease: 'easeInOut'}}
        exit={{
            x: '100vw',
            transition: { 
              delay: 1,
              duration: 0.5
            }
          }}
        >
            <div className="offcanvas-menu__wrap">
                <nav className="menu-items">
                    <ul>
                        {
                            MenuLinks.map((item, key) => (
                                <motion.a 
                                key={key}
                                initial={{opacity: 0, x:50}}
                                animate={{opacity: 1, x:0}}
                                transition={{duration: 0, delay: 0.15 * (key+1), ease: 'easeInOut'}}
                                exit={{
                                    duration: 0.5,
                                    x: 50,
                                    opacity: 0,
                                  }}
                                onClick={() => props.isMenuOpen && props.closeMenu()}
                                href={item.url}><li className="menu-item">{item.title}</li></motion.a>
                            ))
                        }
                    </ul>    
                </nav>
            </div>  
        </motion.div>
    );
}

export default OffCanvasMenu;