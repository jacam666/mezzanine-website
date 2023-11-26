import React from 'react'
import '../Styles/AboutUs.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function AboutUsPage() {
    return (
        <div className='about-us-container'>
            <h1 className='about-us-header'>About Us:</h1>
            <div className='row'>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig"  className='about-us-description paragraph-1 col-12 mt-0'>
                Master Mezzanine is a leading provider of bespoke mezzanine flooring solutions for various sectors and applications. Whether you need to increase your storage space, expand your office area, or create a new retail floor, we can design, manufacture, and install a mezzanine floor that suits your needs and budget.
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig"  className='about-us-description  col-12'>
                We have over 30 years of experience in the mezzanine flooring industry,and use the latest CAD technology to create customised mezzanine floors that maximize the use of your available space and comply with all the relevant building and fire regulations.
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig"  className='about-us-description col-12'>
                Our mezzanine floors are made from high-quality materials and components, and we offer a range of accessories and options to enhance the functionality and aesthetics of your mezzanine floor, such as staircases, handrails, pallet gates, decking, and partitioning. We also offer a complete service, from initial site survey and quotation, to technical drawings and approvals, to manufacturing and installation.
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig"  className='about-us-description col-12'>
                At Master Mezzanine, we pride ourselves on our customer service and satisfaction. We aim to deliver your mezzanine floor on time and within budget, with minimal disruption to your business operations. We also offer after-sales support and maintenance to ensure your mezzanine floor remains in optimal condition.
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig"  className='about-us-description col-12' id='paragraph-5'>
                If you are looking for a reliable and professional mezzanine flooring installation company, look no further than Master Mezzanine. Contact us today to find out how we can help you transform your space with a mezzanine floor.
            </AnimationOnScroll>
            </div>
            
        </div>
    )
}

export default AboutUsPage