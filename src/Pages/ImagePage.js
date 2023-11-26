// import React from 'react'
// import '../Styles/ImagePage.css'

// function ImagePage() {

//     return (
//         <div className='image-page-container'>
//             <div className='scope'>
//                 <span style={{ '--i': 1 }}><img src='/Images/1R (1)_edited.jpg' alt='mezzanine floor' /></span>
//                 <span style={{ '--i': 2 }}><img src='/Images/2R (1)_edited.jpg' alt='mezzanine floor' /></span>
//                 <span style={{ '--i': 3 }}><img src='/Images/3img-industrial-mezzanine-floor_edited.jpg' alt='mezzanine floor' /></span>
//                 <span style={{ '--i': 4 }}><img src='/Images/4mezz1_edited.jpg' alt='mezzanine floor' /></span>
//                 <span style={{ '--i': 5 }}><img src='/Images/5R (1)_edited.jpg' alt='mezzanine floor' /></span>
//                 <span style={{ '--i': 6 }}><img src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' alt='mezzanine floor' /></span>
//                 <span style={{ '--i': 7 }}><img src='/Images/3img-industrial-mezzanine-floor_edited.jpg' alt='mezzanine floor' /></span>
//                 <span style={{ '--i': 8 }}><img src='/Images/4mezz1_edited.jpg' alt='mezzanine floor' /></span>
//                 <span style={{ '--i': 9 }}><img src='/Images/5R (1)_edited.jpg' alt='mezzanine floor' /></span>
//                 <span style={{ '--i': 10 }}><img src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' alt='mezzanine floor' /></span>
//             </div>
//         </div>
//     )
// }

// export default ImagePage


// import React from 'react';
// import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
// import '../Styles/ImagePage.css'

// export default function ImagePage() {
//     return (
//         <MDBCarousel showControls>
//             <MDBCarouselItem itemId={1}>
//                 <img src='/Images/1R (1)_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId={2}>
//                 <img src='/Images/2R (1)_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId={3}>
//                 <img src='/Images/3img-industrial-mezzanine-floor_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId={4}>
//                 <img src='/Images/4mezz1_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId={5}>
//                 <img src='/Images/5R (1)_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId={6}>
//                 <img src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
//             </MDBCarouselItem>
//         </MDBCarousel>
//     );
// }

import Carousel from 'react-bootstrap/Carousel';
import '../Styles/ImagePage.css'

function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
            <img src='/Images/1R (1)_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src='/Images/2R (1)_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src='/Images/3img-industrial-mezzanine-floor_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src='/Images/4mezz1_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
                {/* <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src='/Images/5R (1)_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
                {/* <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
                {/* <Carousel.Caption>
                    <h3>Sixth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;