import React, { useEffect, useRef } from 'react';

export default function Section({ cls, header, children, id }) {
    const img = useRef(null);
    const onScroll = () => {
        let top = img.current.parentElement.getBoundingClientRect().top;
        const styledTop = -top * 0.4;
        img.current.style.top =
            styledTop > 200
                ? '200px'
                : styledTop < -200
                ? '-200px'
                : styledTop + 'px';
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
    return (
        <>
            <section className={'paralex ' + cls} id={id}>
                <div className='paralex-img' ref={img}></div>
                <div className='paralex-cover'></div>
                {header}
            </section>
            {children}
        </>
    );
}
