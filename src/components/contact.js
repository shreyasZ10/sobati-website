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

    // const clearState = () => setState({ ...initialState });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
        // emailjs
        //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        //     .then(
        //         (result) => {
        //             console.log(result.text);
        //             clearState();
        //         },
        //         (error) => {
        //             console.log(error.text);
        //         }
        //     );
    };

    return (
        <div>
            <div id='contact' className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='section-title'>
                            <h2>Get In Touch</h2>
                            <p>
                                Please fill out the form below to send us an email, and we will get back to you as soon as possible.
                            </p>
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
                                            placeholder='Name'
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
                                            placeholder='Email'
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
                                    placeholder='Message'
                                    required
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div id='success'>
                                <br></br>
                            </div>
                            <div className="text-center">
                            <button type='submit' className='btn btn-primary btn-lg mx-auto'>
                                Send Message
                            </button>
                            </div>
                        </form>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='col-md-8'>
                        <div className='contact-info'>
                            <div className='contact-item'>
                                <h3>Contact Info</h3>
                                <br/>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faAddressBook}/> Address 
                                    </span>{' '}
                                    {props.data ? props.data.address : 'loading'}
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faPhone}/> Phone
                                    </span>{' '}
                                    {props.data ? props.data.phone : 'loading'}
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                    <FontAwesomeIcon icon={faEnvelope}/> Email
                                    </span>{' '}
                                    {props.data ? props.data.email : 'loading'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='text-center'>
                        <p>
                            <br/>
                            <img src="/home/qrcode.jpg" alt="QR code"
                                style={{ width: '40%' }} />
                        </p>
                        </div>
                    </div>
                </div>
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
                        &copy; 2024 Sobati Foundation
                    </p>
                </div>
            </div>
        </div>
    );
};
