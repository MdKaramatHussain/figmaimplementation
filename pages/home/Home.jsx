import React from 'react'
import { Form, Image, InputGroup } from 'react-bootstrap'

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '81.3vh', }}>
            <div className='p-5 text-white'>
                <span>
                    <span style={{ fontSize: '60px', fontWeight: 'bold', fontFamily: 'sans-serif', }}>Transforming Ideas Into <span style={{ color: "#FD7608" }}>Powerful Solutions</span></span><br />
                    FOR STARTUPS AND GROWING BUSINESSES, WER AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR & TRANSFORMATIVE JOURNEY INTIS THE DIGITAL REALM
                </span>
                <div className='mt-4' style={{width:'250px'}}>
                    <InputGroup style={{borderRadius:'5px', border:'0.3px solid white', backgroundColor:'black', color:'white'}}>
                        <InputGroup.Text id="basic-addon1" style={{backgroundColor:'#FD7608'}}>@</InputGroup.Text>
                        <Form.Control
                            placeholder="Get a free consultation"
                            aria-label="Username"
                            style={{backgroundColor:'#08090C', color:'white',}}
                        />
                    </InputGroup>
                </div>


            </div>
            <div >
                <Image src='../home.jpg' width={600} />
            </div>
        </div>
    )
}

export default Home
