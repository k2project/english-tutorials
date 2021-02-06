import React from 'react';
import Section from '../Section';
import { GiUnionJack } from 'react-icons/gi';
import { IoWalletOutline } from 'react-icons/io5';
import { BsCheckCircle, BsBookmarkPlus, BsPeople } from 'react-icons/bs';
import { FiCalendar, FiBook } from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi';

const Header = (
    <div className='paralax-content colums-3'>
        <div>
            <span className='icon-circle icon-flag'>
                <GiUnionJack />
            </span>
            <h3>Tutorials</h3>
            <p>1 to 1 or group conversations with a native speaker</p>
        </div>
        <div>
            <span className='icon-circle'>
                <BsCheckCircle />
            </span>
            <h3>Proof Reading</h3>
            <p>Final text checking and formatting befor the publication</p>
        </div>
        <div>
            <span className='icon-circle'>
                <BsBookmarkPlus />
            </span>
            <h3>Copy Writing</h3>
            <p>Supplying the advertising or marketing content</p>
        </div>
    </div>
);
export default function Work() {
    return (
        <Section cls='middle' header={Header}>
            <div className='wrapper' id='who-I-am'>
                <div className='columns-2-uneven'>
                    <div className='about'>
                        <h2></h2>
                        <h3 className='section-subtitle'>
                            Every student matters, every moment counts. Learn to
                            speak English with confidence!
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </div>
                    <div className='benefits'>
                        <ul>
                            {benefitsList.map((item, i) => (
                                <li key={i + 'benefit'}>
                                    <span
                                        className={
                                            item.customIconCls
                                                ? 'benefits--icon ' +
                                                  item.customIconCls
                                                : 'benefits--icon'
                                        }
                                    >
                                        {item.icon}
                                    </span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}

const benefitsList = [
    {
        icon: <HiOutlineShieldCheck />,
        customIconCls: 'shield',
        text: 'Experienced and qualified tutor',
    },
    {
        icon: <GiUnionJack />,
        text: 'British native speaker',
    },
    { icon: <FiBook />, text: 'Immense vocabulary' },
    { icon: <IoWalletOutline />, text: 'Affordable price' },
    { icon: <FiCalendar />, text: 'Convenient schedules' },
    { icon: <BsPeople />, text: '1 to 1 conversations' },
];
