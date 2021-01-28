import React from 'react';
import './homepage.styles.scss';
//HomePage Functional Component
const HomePage = () => (

    // homepage outside container
    <div className= "homepage"> 
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content-container'>
                     <h1 className='title'>Hats</h1>
                     <span className='subtitle'>Show Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content-container'>
                     <h1 className='title'>Jackets</h1>
                     <span className='subtitle'>Show Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content-container'>
                     <h1 className='title'>Sneakers</h1>
                     <span className='subtitle'>Show Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content-container'>
                     <h1 className='title'>Womens</h1>
                     <span className='subtitle'>Show Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content-container'>
                     <h1 className='title'>Mens</h1>
                     <span className='subtitle'>Show Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;