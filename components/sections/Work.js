import React from 'react';
import Section from '../Section';
import { GiUnionJack } from 'react-icons/gi';
import { BsCheckCircle } from 'react-icons/bs';
import { BsBookmarkPlus } from 'react-icons/bs';

const Header = (
    <div className='paralax-content colums-3'>
        <div>
            <span className='icon-circle icon-flag'>
                <GiUnionJack />
            </span>
            <h3>Tutorials</h3>
            <p>1 to 1 or group conversations with native speaker</p>
        </div>
        <div>
            <span className='icon-circle'>
                <BsCheckCircle />
            </span>
            <h3>Proof Reading</h3>
            <p>Final text checking and formatting befor publication</p>
        </div>
        <div>
            <span className='icon-circle'>
                <BsBookmarkPlus />
            </span>
            <h3>Copy Writing</h3>
            <p>Supplying advertising or marketing content</p>
        </div>
    </div>
);
export default function Work() {
    return (
        <Section cls='middle' header={Header}>
            <div className='wrapper' id='who-I-am'>
                <div className='two-columns'>
                    <div className='about'>
                        <h2></h2>
                        <h3 className='section-subtitle'>
                            Venture Capital Professional - Generalist
                            Technology, Specialist Early-stage.
                        </h3>
                        <p>
                            Christopher holds over 30 years of venture capital
                            and operational experience in early-stage growth
                            companies.
                        </p>
                        <p>
                            Of almost 20 deals across multiple funds in the
                            early-stage sector, consisting entirely of Seed and
                            Start-up, Christopher has engineered successful
                            (+money) exits for well over half of these, with
                            extraordinarily high returns across all managed
                            portfolios.
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </Section>
    );
}
