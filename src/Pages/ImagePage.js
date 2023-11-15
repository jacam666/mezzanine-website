import React from 'react'

function ImagePage() {
    return (
        <div className='row'>
            <h1>
                Gallery
            </h1>
            <div className='image-container row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid h-100 ' src='/Images/1R (1).jpeg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid' src='/Images/2R (1).jpeg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid' src='/Images/3img-industrial-mezzanine-floor.jpg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid h-100' src='/Images/4mezz1.jpg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid h-100' src='/Images/5R (1).jpeg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid h-100' src='/Images/6CUSTOM-MEZZANINE-FLOOR.jpg' alt='mezzanine floor'></img>
                </div>

            </div>
        </div>
    )
}

export default ImagePage