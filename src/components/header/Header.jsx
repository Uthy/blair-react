import logo from '../../assets/images/logo/BlairLogo.png';
// import logo from '../../../public/images/logo/BlairLogo.png';
import { useState } from 'react';
import OffCanvasMenu from './OffCanvasMenu';
import { AnimatePresence } from 'framer-motion';

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }
    const closeMenu = () =>  setMenuOpen(false);

    return (
        <header className="header">
            <div className="header-wrap">
                <div className="brand">
                    <a href="/" className="logo">
                        <img src={logo} alt="Blair Waldorff" className='logoImg'/>
                    </a>   
                </div>
            
                <div className="menu">
                    <button onClick={handleToggle} className={`menu-trigger ${menuOpen ? "is-active" : ""}`}>
                        <span className="line"></span>    
                    </button>
                </div>
            </div>

            <AnimatePresence exitBeforeEnter>
            {menuOpen ? (
                <OffCanvasMenu key="i" isMenuOpen={true} closeMenu={closeMenu}/>
            ) : ''}
            </AnimatePresence>
            


        </header>
    );
}

export default Header;