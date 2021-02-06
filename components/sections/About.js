import React from 'react';
import Section from '../Section';
import { FiPhone } from 'react-icons/fi';

const Header = (
    <div className='paralax-content'>
        Londres viene a ti
        <div className='paralex-title'>
            <span className='london'>London</span>
            comes to you
        </div>
        <p className='paralex-subtitle'>
            English conversation classes for adults. <br /> Improve your
            practical skills with native speaker from London. Enquire today!
        </p>
        <p className='paralex-subtitle color--theme mob'>
            <span className='mob-icon'>
                <FiPhone />
            </span>
            <b>0123 567 123 99</b>
        </p>
    </div>
);
export default function About() {
    return <Section cls='top' header={Header}></Section>;
}
