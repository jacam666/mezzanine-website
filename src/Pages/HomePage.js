import React, { useEffect } from 'react'

function HomePage() {

    useEffect(() => {
        // Trigger the animation for each text overlay when the component mounts
        const textOverlays = document.querySelectorAll('.text-overlay');
        textOverlays.forEach((textOverlay) => {
            textOverlay.classList.add('animate');
        });
    }, []);

    return (
        <div className='homepage-container'>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <img className='home-page-image img-fluid mt-1' id='homePage-image-1' src='Images/R_edited.jpg' alt='mezzanine flooring' />
                    <div className='text-overlay text-overlay-1'>
                        We are experts in delivering mezzanine flooring solutions for a diverse range of commercial sectors
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <img className='home-page-image img-fluid mt-1' id='homePage-image-2' src='Images/WHITE_FINISH_1.jpeg' alt='mezzanine flooring' />
                    <div className='text-overlay text-overlay-2'>
                        Discover our high-quality finishes that elevate your space
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage