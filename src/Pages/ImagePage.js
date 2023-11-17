import React from 'react'

function ImagePage() {
    const imageStyle = {
        border: '1px solid black',
        height: '100%',
        width: '100%',
        borderRadius: '8px'
    }
    const imageContainer = {
        height: '50vh',
        marginTop: '7px'
    }

    return (
        <div className='image-page-container row'>
            <h1>
                Gallery
            </h1>
            <div className='image-container row m-auto'>
                <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle }} className='gallery-image mt-2' src='/Images/1R (1)_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle }} className='gallery-image mt-2  ' src='/Images/2R (1)_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle  }} className='gallery-image mt-2 ' src='/Images/3img-industrial-mezzanine-floor_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle }} className='gallery-image mt-2  ' src='/Images/4mezz1_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle }} className='gallery-image mt-2  ' src='/Images/5R (1)_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle }} className='gallery-image mt-2 ' src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' alt='mezzanine floor'></img>
                </div>

            </div>
        </div>
    )
}

export default ImagePage