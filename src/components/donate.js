import React from 'react';

export const Donate = (props) => {
    return (
        <div id='donate' className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h2 className='section-title'>आत्ता दान करा</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='contact-info'>
                        <div className='contact-item'>
                            <h6><strong>नाव:</strong> {props.data ? props.data.name : 'loading'}</h6>
                        </div>
                        <div className='contact-item'>
                            <p><strong>खाता क्रमांक:</strong> {props.data ? props.data.accountNo : 'loading'}</p>
                        </div>
                        <div className='contact-item'>
                            <p><strong>बँक:</strong> {props.data ? props.data.bank : 'loading'}</p>
                        </div>
                        <div className='contact-item'>
                            <p><strong>शाखा:</strong> {props.data ? props.data.branch : 'loading'}</p>
                        </div>
                        <div className='contact-item'>
                            <p><strong>I.F.S.C. कोड:</strong> {props.data ? props.data.ifsc : 'loading'}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='text-center'>
                        <img src="/home/qrcode.jpg" alt="QR code" style={{ width: '70%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
