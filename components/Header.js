import React from 'react';
import Link from 'next/link';
import { GiUnionJack } from 'react-icons/gi';

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
                <GiUnionJack className='flag' />
                {/* <img src='/imgs/uk-flag.png' alt='' className='flag' /> */}
                <span>LaTertuliaInglesa</span>
            </div>
            {/* <div className='menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div> */}
            <nav>
                <ul>
                    {/* <li onClick={toggleMenu}>
                        <Link href='/#who-I-am'>
                            <a>Who I am</a>
                        </Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link href='/#what-I-do'>
                            <a>What I do</a>
                        </Link>
                    </li> */}
                    <li onClick={toggleMenu}>
                        <Link href='/#my-projects'>
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link href='/#contact-me'>
                            <a>Contact</a>
                        </Link>
                    </li>
                    {/* <li onClick={closeMenu} className='menu-close'>
                        x close
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}
