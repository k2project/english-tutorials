import React from 'react';
import Link from 'next/link';

export default function Header() {
    const toggleMenu = () => {
        document.getElementById('header').classList.toggle('open');
    };
    const closeMenu = () => {
        window.scrollTo(0, 0);
        toggleMenu();
    };
    return (
        <header id='header'>
            <div className='logo'>
                christopher<span className='color--theme'>seabolt</span>
            </div>
            <div className='menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>
                <ul>
                    <li onClick={toggleMenu}>
                        <Link href='/#who-I-am'>
                            <a>Biography</a>
                        </Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link href='/#what-I-do'>
                            <a>Methodology</a>
                        </Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link href='/#my-projects'>
                            <a>Projects</a>
                        </Link>
                    </li>
                    {/* <li onClick={toggleMenu}>
                        <Link href='/#contact-me'>
                            <a>Blog</a>
                        </Link>
                    </li> */}
                    <li onClick={toggleMenu}>
                        <Link href='/#contact-me'>
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li onClick={closeMenu} className='menu-close'>
                        x close
                    </li>
                </ul>
            </nav>
        </header>
    );
}
