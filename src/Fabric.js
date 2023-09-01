import React from 'react';
import './Fabric.css';
import Images from '../src/Images/new fab.jpg'
import Footer from './Footer';
import Header from './Header';

export default function Fabric() {
    return (
        <>
            <Header/>
            <div className='downtxt'>Select your fabric to your choice</div>
            <div className='rectangle'>
                <img className='img' src={Images}></img>
                <div className='cottontxt'>Cotton</div>
                <div className='bottomtxt'>Shop Cotton</div>

            </div>
            <Footer />


        </>
    )
}
