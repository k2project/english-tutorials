import Head from 'next/head';
import { Fragment } from 'react';
// import '../styles/styles.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Demo</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main>
                <Section cls='top'>
                    <h2 className='paralex-title'>Tutorials like no others</h2>
                    <p className='paralex-subtitle'>
                        Improve your English with native speaker that's easy to
                        talk and skilled in tutoring.
                    </p>
                    <div className='btn-box'>
                        <button className='btn btn--theme'>Take action</button>
                    </div>
                </Section>
                <Section cls='middle'>
                    <h2 className='paralex-title'>Listen. Talk. Succed.</h2>
                    <p className='paralex-subtitle'>
                        You can say whatever you want here. <br />
                        Just sell it! And sell it well!
                    </p>
                    {/* <div className='btn-box'>
                        <button className='btn btn--theme'>Other Action</button>
                    </div> */}
                </Section>
                <Section cls='bottom'>
                    <h2 className='paralex-title'>Don't miss out!</h2>
                    <p className='paralex-subtitle'>
                        Get in touch for free demo tutorial.
                    </p>
                    <div className='btn-box'>
                        <button className='btn btn--theme'>Take action</button>
                    </div>
                </Section>
            </main>
            <Footer />
        </Fragment>
    );
}
