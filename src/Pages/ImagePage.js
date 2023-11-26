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
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src='/Images/3img-industrial-mezzanine-floor_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src='/Images/4mezz1_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src='/Images/5R (1)_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' className='d-block w-100 carousel-image' alt='...' />
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;