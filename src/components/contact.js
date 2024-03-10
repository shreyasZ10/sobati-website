import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    name: '',
    email: '',
    message: '',
};

export const Contact = (props) => {
    const [{ name, email, message }, setState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    };

    return (
        <div>
            <div id='contact' className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <div className='section-title'>
                            <h2>संपर्क साध</h2>
                            <p>कृपया खालील फॉर्म भरा आणि आपला संदेश पाठवा, आम्ही पुन्हा जलद काहीतरी तुम्हाला परत येऊ</p>
                        </div>
                        <form name='sentMessage' validate onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            className='form-control'
                                            placeholder='नाव'
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            className='form-control'
                                            placeholder='ईमेल'
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <textarea
                                    name='message'
                                    id='message'
                                    className='form-control'
                                    rows='4'
                                    placeholder='संदेश'
                                    required
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div id='success'><br/></div>
                            <div className="text-center">
                                <button type='submit' className='btn btn-primary btn-lg mx-auto'>
                                    संदेश पाठवा
                                </button>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    <div className='col-md-8 offset-md-2'>
                        <div className='contact-info'>
                            <div className='contact-item'>
                                <h3>संपर्क माहिती</h3>
                                <br/>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faAddressBook}/> पत्ता 
                                    </span>{' '}
                                    {props.data ? props.data.address : 'loading'}
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faPhone}/> फोन
                                    </span>{' '}
                                    {props.data ? props.data.phone : 'loading'}
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faEnvelope}/> ईमेल
                                    </span>{' '}
                                    {props.data ? props.data.email : 'loading'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='row mt-5'>
                    <div className='col-md-12 text-center'>
                        <div className="social">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href={props.data ? props.data.facebook : '/'}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={props.data ? props.data.twitter : '/'}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={props.data ? props.data.youtube : '/'}>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <div className='container text-center'>
                    <p>
                        &copy; २०२४ Sobati Foundation
                    </p>
                </div>
            </div>
        </div>
    );
};
