import React from 'react'

function ImagePage() {
    const imageStyle = {
        border: '1px solid black',
        margin: 'auto'
    }

    return (
        <div className='row'>
            <h1>
                Gallery
            </h1>
            <div className='image-container row m-auto'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img style={imageStyle} className='img-fluid h-100 ' src='/Images/1R (1).jpeg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img style={imageStyle} className='img-fluid h-100' src='/Images/2R (1).jpeg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img style={imageStyle} className='img-fluid h-100' src='/Images/3img-industrial-mezzanine-floor.jpg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img style={imageStyle} className='img-fluid h-100' src='/Images/4mezz1.jpg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img style={imageStyle} className='img-fluid h-100' src='/Images/5R (1).jpeg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img style={imageStyle} className='img-fluid h-100' src='/Images/6CUSTOM-MEZZANINE-FLOOR.jpg' alt='mezzanine floor'></img>
                </div>

            </div>
        </div>
    )
}

export default ImagePage