import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                minHeight: '60vh', 
                backgroundColor: '#333', 
                color: 'white', 
                paddingTop: '10px',
                margin: 0,
            }}
        >
            <br></br>
            <footer id='footer' style={{ margin: 0, padding: 0 }}>
            <div id='contact' className='container' style={{ flex: 1 }}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='section-title'>
                            <h2>संपर्क माहिती</h2>
                            <br/>
                            <div className='contact-info'>
                                <div className='contact-item'>
                                    <p>
                                        <span>
                                            <FontAwesomeIcon icon={faAddressBook}/> पत्ता : 
                                        </span>{' '}
                                        {props.data ? props.data.address : 'loading'}
                                    </p>
                                </div>
                                <div className='contact-item'>
                                    <p>
                                        <span>
                                            <FontAwesomeIcon icon={faPhone}/> फोन : 
                                        </span>{' '}
                                        {props.data ? props.data.phone : 'loading'}
                                    </p>
                                </div>
                                <div className='contact-item'>
                                    <p>
                                        <span>
                                            <FontAwesomeIcon icon={faEnvelope}/> ईमेल : 
                                        </span>{' '}
                                        {props.data ? props.data.email : 'loading'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='section-title'>
                            <h2>संपर्क साधा</h2>
                            <br/>
                            <form name='sentMessage' validate onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-6 mb-3'>
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
                                    <div className='col-md-6 mb-3'>
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
                                    <div className='col-md-12'>
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
                                    </div>
                                    <div id='success'><br/></div>
                                    <div className="text-center">
                                        <button type='submit' className='btn btn-primary btn-lg mx-auto'>
                                            संदेश पाठवा
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
                <div className='container text-center'>
                    <img src='/home/logo/logo2.jpeg' alt='logo' style={{ width: '50%' }} />
                    <br /><br />
                    <p>&copy; २०२४ Sobati Foundation</p>
                </div>
            </footer>
        </div>
    );
};
