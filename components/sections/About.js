import React from 'react';
import Section from '../Section';
import { FaWhatsapp } from 'react-icons/fa';

import { translations } from '../../translations';

const Header = ({ lng }) => (
    <div className='paralax-content'>
        {translations[lng].topSection.tagline}
        <div className='paralex-title'>
            <span className='london'>
                {translations[lng].topSection.titlePt1}
            </span>
            {translations[lng].topSection.titlePt2}
        </div>
        <p className='paralex-subtitle'>
            {translations[lng].topSection.subtitle}
        </p>
        <p className='paralex-subtitle color--theme mob'>
            <span className='mob-icon'>
                <FaWhatsapp />
            </span>
            <b>{translations.mob}</b>
        </p>
    </div>
);
export default function About({ lng }) {
    return <Section cls='top' header={<Header lng={lng} />}></Section>;
}
