import React, { useEffect } from 'react'

function HomePage() {

    useEffect(() => {
        // Trigger the animation when the component mounts
        const textOverlay = document.querySelector('.text-overlay');
        textOverlay.classList.add('animate');
    }, []);

    return (
        <div className='homepage-container'>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-12 col-md-6 col-sm-12">
                    <img className='home-page-image img-fluid mt-1' id='homePage-image-1' src='Images/R_edited.jpg' alt='mezzanine flooring' />
                    <div className='text-overlay'>
                        We are experts in delivering mezzanine flooring solutions for a diverse range of commercial sectors
                    </div>
                </div>
                {/* <div className="col-lg-12 col-md-6 col-sm-12">
                    <img className='home-page-image img-fluid mt-1' id='homePage-image-2' src='Images/838496f8dde33786e17180f7dcb3426d_edited.jpg' alt='mezzanine flooring' />
                </div> */}
            </div>
        </div>


    )
}

export default HomePage