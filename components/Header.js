import React from 'react';
import Link from 'next/link';
import { GiUnionJack } from 'react-icons/gi';
import { translations } from '../translations';

export default function Header({ lng, setLng }) {
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
                <span>LaTertuliaInglesa</span>
            </div>
            <nav>
                <ul>
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
                </ul>
                <button
                    className={`btn-language ${lng === 'es' ? 'active' : ''}`}
                    onClick={() => setLng('es')}
                >
                    ES
                </button>
                <button
                    className={`btn-language ${lng === 'en' ? 'active' : ''}`}
                    onClick={() => setLng('en')}
                >
                    EN
                </button>
            </nav>
        </header>
    );
}
