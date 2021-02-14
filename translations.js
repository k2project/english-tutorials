import React from 'react';

const webTitle = 'LaTertuliaInglesa';
const mob = '+57 304 489 7591';

const en = {
    topSection: {
        titlePt1: 'London',
        titlePt2: 'comes to you',
        tagline: 'Londres viene a ti',
        subtitle: (
            <>
                Intermediate and advanced English conversation classes for
                adults. Improve your practical skills with a native speaker from
                London. Enquire today!
            </>
        ),
    },
    offers: {
        tutorials: {
            title: 'Tutorils',
            subtitle: '1 to 1 classes and conversations with a native speaker',
        },
        editing: {
            title: 'Proof Reading',
            subtitle:
                'Final text checking and formatting befor the publication',
        },
        business: {
            title: 'Business English',
            subtitle: 'Supplying the advertising or marketing content',
        },
    },
    about: {
        tagline: 'Speak English with confidence!',
        title:
            'Every student matters, every moment counts. Learn to speak English with confidence! ',
    },
};
const es = {
    topSection: {
        titlePt1: 'Londres',
        titlePt2: 'viene a ti',
        tagline: 'London comes to you',
        subtitle: (
            <>
                Clases de inglés conversacional para estudiantes de niveles
                intermedio y avanzado. Mejora tus habilidades practicas con un
                profesor privado, nativo de Londres.
            </>
        ),
    },
    offers: {
        tutorials: {
            title: 'Tutoriales',
            subtitle:
                'Clases de inglés presenciales y online. Uno a uno con profesor nativo de Londres',
        },
        editing: {
            title: 'Correccion de Escritos',
            subtitle:
                'Chequeo final de ortografía y redacción acualquier tipo de escritos, en forma profesional',
        },
        business: {
            title: 'Inglés de Negocios',
            subtitle: 'Inglés de negocios con propósitos específicos',
        },
    },
    about: {
        tagline: '¡Habla inglés con confianza!',
        title:
            'Cada estudiante es guiado individualmente de acuerdo a sus necesidades y propósitos. ¡Todos somos diferentes! ',
    },
};

export const translations = { webTitle, mob, en, es };
