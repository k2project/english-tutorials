import Head from 'next/head';
import { Fragment } from 'react';
// import '../styles/styles.scss';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>
                    Christopher Seabolt | Venture Capital Professional
                </title>
                <meta
                    name='description'
                    content='Christopher holds over 30 years of venture capital and operational experience in early-stage growth companies. Of almost 20 deals across multiple funds in the early-stage sector, consisting entirely of Seed and Start-up, Christopher has engineered successful (+money) exits for well over half of these, with extraordinarily high returns across all managed portfolios.'
                />
                <meta
                    name='keywords'
                    content='venture capital, early-stage, startup, seed, highest performance, experienced, realized returns'
                />
                <meta name='author' content='@_k2project' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    property='og:title'
                    content='Christopher Seabolt | Venture Capital Professional'
                />
                <meta property='og:url' content='https://www.armillary.eu' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:description'
                    content='Christopher holds over 30 years of venture capital and operational experience in early-stage growth companies. Of almost 20 deals across multiple funds in the early-stage sector, consisting entirely of Seed and Start-up, Christopher has engineered successful (+money) exits for well over half of these, with extraordinarily high returns across all managed portfolios.'
                />
                <meta
                    property='og:image'
                    content='https://www.www.armillary.eu/imgs/christopher-seabolt.jpg'
                />

                <script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=UA-180574978-1'
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0F90YHNWN0');
        `,
                    }}
                />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Header />
            <main>
                <About />
                <Work />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </Fragment>
    );
}
