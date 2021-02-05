import React from 'react';
import Section from '../Section';

const Header = (
    <>
        <div className='paralex-title'>
            Navigate to <b className='color--theme '>Success</b>
        </div>
        <p className='paralex-subtitle'>
            Drive rapid scale to enhanced exit returns.
        </p>
    </>
);
export default function Work() {
    return (
        <Section cls='middle' header={Header}>
            <div className='wrapper two-columns' id='what-I-do'>
                <h2></h2>
                <div className='column-left'>
                    <h3 className='section-subtitle'>
                        No company failed because things went according to plan.
                    </h3>
                    <p>
                        The world of and approach to early-stage venture
                        investing ceased to make pragmatic sense decades ago.
                    </p>
                </div>
                <div className='column-right'>
                    <p>
                        Realized returns are fundamental but seem largely absent
                        from focus. The industry is driven by a focus on PR and
                        not IRR. There is no other financial sector where
                        achievable returns are as of little relevance. This is
                        not sustainable.
                    </p>
                    <p>
                        There is a misconception that if you provide capital to
                        early-stage companies, they are positioned to succeed.
                        Pragmatic execution strategies on deployed capital are
                        the primary failure point in early-stage. Venture
                        investors at these stages must not only provide capital
                        but bridge operational and executional competences.
                    </p>
                </div>
            </div>
            <div className='bg--secondary'>
                <div className='wrapper'>
                    <p>
                        Money isn’t the magic quality that transforms and scales
                        early-stage companies. <br />
                        <b> Money + strategy + execution</b> is required.
                        Venture capital investors in these stages must be able
                        to demonstrably deliver all three
                    </p>
                    <p>
                        When the combination of these competences has been
                        brought together and made available to early-stage
                        companies, Christopher delivered market leading results
                        across a broad spectrum of industries.
                    </p>
                    <ul className='work'>
                        <li>
                            <span>
                                <img src='/imgs/plan.png' alt='' />
                                <b>Business plans</b> must reflect pragmatic
                                go-to-market strategies, with target markets of
                                sufficient size to accommodate early-stage risk.
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src='/imgs/strategy.png' alt='' />
                                <b>Execution strategies</b> within these target
                                markets must be pragmatic in terms of achievable
                                results within limited cash and human resource
                                constraints.
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src='/imgs/bulb.jpg' alt='' />
                                <b>Products</b> must be developed to pragmatic
                                market needs. There are too many solutions
                                looking for a problem, and too many
                                overengineered solutions expecting the product’s
                                technology aspects to support high prices
                                relative to simpler and lower cost alternatives.
                            </span>
                        </li>

                        <li>
                            <span>
                                <img src='/imgs/infastructure.png' alt='' />
                                <b>Operational infrastructures </b> must be
                                pragmatically large enough to achieve target
                                go-to-market execution goals, while
                                pragmatically small enough to maximize benefit
                                across limited resources.
                            </span>
                        </li>
                    </ul>

                    <p>
                        Early-stage companies usually lack these competences in
                        house. Expecting successful capital deployment with this
                        lacking isn’t pragmatic. Expecting good ideas to build
                        multi-million-dollar revenue streams in and of
                        themselves isn’t pragmatic.{' '}
                    </p>
                    <p>
                        “It’s in the execution of the business model, stupid…”
                    </p>
                </div>
            </div>
        </Section>
    );
}
