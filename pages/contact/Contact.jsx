import React from 'react'
import { Image } from 'react-bootstrap'

export default function Contact() {
    return (
        <div>
            <div className='justify-content-between text-center text-white mt-5'>
                <span style={{ fontSize: '40px', fontWeight: 'bold' }}>Contact Us</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '140px' }}>
                <div>
                    <Image
                        src='../contact.jpg'
                        width={470}
                        style={{ borderRadius: '25px' }}
                    />
                </div>
                <div style={{ marginLeft: '140px' }}>
                    <form style={{ width: '100wh', marginTop:'25vh' }}>
                        <div style={{ marginTop: '70px' }}>
                            <label className='text-white'>Name</label>
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                style={{
                                    placeholder: 'white',
                                    backgroundColor: '#47243F',
                                    WebkitTextFillColor: 'white',
                                    width: '50vh',
                                    padding: '2px',
                                    paddingLeft: '15px',
                                    border: '1px solid white',
                                    borderRadius: '5px', 
                                    marginTop:'10px'
                                }}
                            />
                        </div>

                        <div style={{ marginTop: '10px' }}>
                            <label className='text-white'>Email</label>
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Enter email'
                                style={{
                                    placeholder: 'white',
                                    backgroundColor: '#47243F',
                                    WebkitTextFillColor: 'white',
                                    width: '50vh',
                                    padding: '2px',
                                    paddingLeft: '15px',
                                    border: '1px solid white',
                                    borderRadius: '5px', 
                                    marginTop:'10px'
                                }}
                            />
                        </div>

                        <div style={{ marginTop: '10px' }}>
                            <label className='text-white'>Phone</label>
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Enter phone'
                                style={{
                                    placeholder: 'white',
                                    backgroundColor: '#47243F',
                                    WebkitTextFillColor: 'white',
                                    width: '50vh',
                                    padding: '2px',
                                    paddingLeft: '15px',
                                    border: '1px solid white',
                                    borderRadius: '5px', 
                                    marginTop:'10px'
                                }}
                            />
                        </div>
                        <div>
                            <button
                            style={{
                                    backgroundColor: '#8E3F76 ',
                                    WebkitTextFillColor: 'white',
                                    width: '50vh',
                                    padding: '2px',
                                    paddingLeft: '15px',
                                    border: '1px solid white',
                                    borderRadius: '5px',
                                    marginTop:'30px'
                                }}
                            >Contact
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
