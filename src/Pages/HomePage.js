import React, { useEffect } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function HomePage() {

    useEffect(() => {
        const textOverlays = document.querySelectorAll('.text-overlay');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        });
        textOverlays.forEach((textOverlay) => {
            observer.observe(textOverlay);
        });
    }, []);

    return (
        <div className='homepage-container'>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <img className='home-page-image img-fluid mt-1' id='homePage-image-1' src='Images/R_edited.jpg' alt='mezzanine flooring' />
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="text-overlay text-overlay-1">
                        We are experts in delivering mezzanine flooring solutions for a diverse range of commercial sectors
                    </AnimationOnScroll>
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <img className='home-page-image img-fluid mt-1' id='homePage-image-2' src='Images/WHITE_FINISH_1.jpeg' alt='mezzanine flooring' />
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="text-overlay text-overlay-2">
                        Discover our high-quality finishes that elevate your space
                    </AnimationOnScroll>
                </div>
            </div>
            {/* <AnimationOnScroll animateIn="animate__bounceIn">
                        <h2>Some Text</h2>
                    </AnimationOnScroll> */}
        </div>
    )
}

export default HomePage
