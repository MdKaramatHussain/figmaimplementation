import React from 'react'
import { Image } from 'react-bootstrap'

function Services() {
    return (
        <div className='mt-5' style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='p-2 mt-5 g-5 justify-content-between' style={{ marginLeft: '150px', backgroundImage:'radial-gradient(circle, rgba(165, 55, 253)' }}>
                <span style={{ fontSize: '25px', fontWeight: 'bold', color: 'white' }} >We provide the best web services</span>
                <div className='mt-3'>
                    <span className='text-white mt-3' style={{ fontSize: '12px', fontWeight: 'bold' }}>LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT, CURAE POSUERE DONEC TELLUS EU EGESTAS ALIQUET, LACINIA PARTURIENT FACILISI QUAM DICTUM SUSPENDISSE. TINCIDUNT GRAVIDA VIVAMUS</span>
                    <div className='mt-3' style={{ color: 'white' }}>
                        <li> <i class="bi bi-check-circle-fill"></i>MOST EASY PREMIUM WEB DESIGN PROCESS</li>
                        <li>MOST EASY PREMIUM WEB DESIGN PROCESS</li>
                        <li>MOST EASY PREMIUM WEB DESIGN PROCESS</li>
                        <li>MOST EASY PREMIUM WEB DESIGN PROCESS</li>
                        <li>MOST EASY PREMIUM WEB DESIGN PROCESS</li>

                    </div>
                </div>

            </div>
            <div className='p-5 mt-5' style={{ marginLeft: '20px' }} >
                <Image src='../Services.jpg' width={600} />
            </div>
        </div>
    )
}

export default Services
