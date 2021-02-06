import React from 'react';
import Section from '../Section';

export default function Contact() {
    return (
        <>
            <div className='Contact columns-2'>
                <Section cls='Contact--bg' />
                <div className='Contact--form column-2-left'>
                    <form>
                        <label htmlFor='name' className='sr-only'>
                            Name *
                        </label>
                        <input
                            type='text'
                            id='name'
                            autoComplete='off'
                            placeholder='Name *'
                        />
                        <label htmlFor='details' className='sr-only'>
                            Email/Mobile *
                        </label>
                        <input
                            type='text'
                            id='details'
                            autoComplete='off'
                            placeholder='Email or mobile *'
                        />

                        <input
                            type='email'
                            id='honeyTrap'
                            className='honeyTrap'
                            aria-hidden='true'
                            tabIndex='-1'
                        />
                        <textarea placeholder='State your message...' />
                        <button type='submit' className='btn'>
                            Send
                        </button>
                    </form>
                    * Required fields
                </div>
                <div className='Contact--info bg--theme column-2-right'>
                    <p>Hablemos hoy!</p>
                    <h3>
                        Get quote <br /> or ask a question.
                    </h3>
                    <p>
                        I am always happy to speak briefly on the phone. You can
                        contact me on <b>0123 456 789</b>. If you prefer the
                        email, please complete the contact form.
                    </p>
                    Please be aware that if I am with clients I will be unable
                    to answer your call. In that case, leave me a message or use
                    the provided form. I will get back to you as soon as
                    possible and within 24 hours.
                </div>
            </div>
        </>
    );
}
