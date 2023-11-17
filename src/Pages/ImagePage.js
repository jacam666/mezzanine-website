import React from 'react'

function ImagePage() {
    const imageStyle = {
        border: '1px solid black',
        height: '95%',
        width: '100%',
        borderRadius: '8px'
    }
    const lowerRowImageStyle = {
        // marginTop: '20px', 
    };

    return (
        <div className='image-page-container row'>
            <h1>
                Gallery
            </h1>
            <div className='image-container row m-auto'>
                <div className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle, ...lowerRowImageStyle }} className=' mt-2' src='/Images/1R (1)_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle, ...lowerRowImageStyle }} className=' mt-2  ' src='/Images/2R (1)_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle, ...lowerRowImageStyle  }} className=' mt-2 ' src='/Images/3img-industrial-mezzanine-floor_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle, ...lowerRowImageStyle }} className=' mt-2  ' src='/Images/4mezz1_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle, ...lowerRowImageStyle }} className=' mt-2  ' src='/Images/5R (1)_edited.jpg' alt='mezzanine floor'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 image-container'>
                    <img style={{ ...imageStyle, ...lowerRowImageStyle }} className=' mt-2 ' src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' alt='mezzanine floor'></img>
                </div>

            </div>
        </div>
    )
}

export default ImagePage