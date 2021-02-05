import React from 'react';

import Section from '../Section';

const ProjectsList = (
    <ul>
        <li>
            <img
                src='/imgs/T-Venture.png'
                alt='Deutsche Telekom Venture Funds GmBH (T-Venture)'
                className='project_logo'
            />
        </li>
        <li>
            <img src='/imgs/hub.png' alt='HubRaum' className='project_logo' />
        </li>
        <li>
            <img
                src='/imgs/solvo.png'
                alt='SOLVO Biotech'
                className='project_logo'
            />
        </li>
        <li>
            <img
                src='/imgs/ceti.png'
                alt='Central Europe Telecom Investments L.P.'
                className='project_logo'
            />
        </li>
        <li>
            <img
                src='/imgs/bac.png'
                alt='Bank Austria Creditanstalt'
                className='project_logo'
            />
        </li>
        <li>
            <img
                src='/imgs/patricof.png'
                alt='Patricof & Co'
                className='project_logo'
            />
        </li>
        <li>
            <img
                src='/imgs/kpc.png'
                alt='Bank Austria Creditanstalt'
                className='project_logo'
            />
        </li>
    </ul>
);

const Header = (
    <>
        <div className='projects-cover cover'></div>
        <div className='projects-header wrapper'>
            <div className='projects-count'>
                <b>30+</b>International Projects
            </div>
            {ProjectsList}
            <a href='https://www.linkedin.com/in/christopher-seabolt-144a5a/'>
                <img src='/imgs/link.png' alt='' className='link' />
                More about all Christopher's projects on LinkedIn
            </a>
        </div>
    </>
);

export default function Projects() {
    return <Section cls='projects' header={Header} id='my-projects' />;
}
