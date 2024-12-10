import { useNavigate } from 'react-router-dom';
import '../assets/logo/oranta-logo.png';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [menuDisplay, setMenuDisplay] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuDisplay(true);
            } else {
                setMenuDisplay(false);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    }



    return (
        <>
            <header className='header'>
                {menuDisplay && (
                    <>
                        <img src="../src/assets/logo/oranta-logo.png" alt="logo of oranta" className='header-logo'></img>
                        <nav>
                            <ul className="nav-items">
                                <li onClick={() => handleNavigation('/')}>Home</li>
                                <li onClick={() => handleNavigation('/science-technology')}>Science & Technology</li>
                                <li onClick={() => handleNavigation('/collaboration-partners')}>Collaboration Partners</li>
                                <li onClick={() => handleNavigation('/career')}>Career</li>
                                <li onClick={() => handleNavigation('/contact')}>Contact</li>
                                <li>
                                    <img src='../src/assets/icons/uk-flag-icon.png' alt='icon of the uk flag' className='language-icon' />
                                </li>
                            </ul>
                            </nav>
                    </>
                )}
                
                {!menuDisplay && (
                    <>
                        <img src="../src/assets/logo/oranta-logo.png" alt="logo of oranta" className='header-logo'></img>
                        <nav className='hidden burger-menu'>
                            <ul className="nav-items">
                                <li onClick={() => handleNavigation('/')}>Home</li>
                                <li onClick={() => handleNavigation('/science-technology')}>Science & Technology</li>
                                <li onClick={() => handleNavigation('/collaboration-partners')}>Collaboration Partners</li>
                                <li onClick={() => handleNavigation('/career')}>Career</li>
                                <li onClick={() => handleNavigation('/contact')}>Contact</li>
                                <li>
                                    <img src='../src/assets/icons/uk-flag-icon.png' alt='icon of the uk flag' className='language-icon' />
                                </li>
                            </ul>
                        </nav>
                    </>
                )}
                
            </header>
        </>
    )
}