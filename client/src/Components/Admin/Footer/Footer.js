import React from 'react'
import './Footer.scss'

export default function Footer(props){
    return (
        <div className='admin-footer-background'>
            <div className='admin-footer'>
                <div className='footer-elm'>
                    <i className="fas fa-phone"></i>
                    <p> 0939393939</p>
                </div>
                <div className='footer-elm'>
                    <i className="fas fa-map-marker-alt"></i>
                    <p> Ninh Kieu, Cantho City</p>
                </div>
                <div className='footer-elm'>
                    <p>Developed by ... group</p>
                </div>
                <div className='footer-elm footer-elm-social'>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-github-square"></i>
                </div>
            </div>
        </div>
    )
}