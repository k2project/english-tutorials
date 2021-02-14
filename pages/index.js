import { Fragment, useState } from 'react';
import Head from 'next/head';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Contact from '../components/sections/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const [lng, setLng] = useState('es');
    return (
        <Fragment>
            <Head>
                <title>
                    LaTertuliaInglesa | Clases de inglés con un profesor nativo
                    de Londres
                </title>
                <meta
                    name='description'
                    content='Clases de inglés conversacional para estudiantes de niveles
                    intermedio y avanzado. Mejora tus habilidades practicas con un
                    profesor privado, nativo de Londres.'
                />
                <meta name='keywords' content='' />
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
                    content='Clases de inglés conversacional para estudiantes de niveles
                    intermedio y avanzado. Mejora tus habilidades practicas con un
                    profesor privado, nativo de Londres.'
                />
                <meta
                    property='og:image'
                    content='https://www.www.armillary.eu/imgs/christopher-seabolt.jpg'
                />

                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Header lng={lng} setLng={setLng} />
            <main>
                <About lng={lng} />
                <Work lng={lng} />
                <Contact lng={lng} />
            </main>
            <Footer />
        </Fragment>
    );
}
