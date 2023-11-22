// import React from 'react'
// import '../Styles/ImagePage.css'

//function ImagePage() {
    // const imageStyle = {
    //     border: '1px solid black',
    //     height: '100%',
    //     width: '100%',
    //     borderRadius: '8px'
    // }
    // const imageContainer = {
    //     height: '50vh',
    //     marginTop: '7px'
    // }

//     return (
//         <div className='image-page-container'>
//             <h1>
//                 Gallery
//             </h1>
//             <div className='image-container row m-auto'>
//                 <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
//                     <img style={{ ...imageStyle }} className='gallery-image mt-2' src='/Images/1R (1)_edited.jpg' alt='mezzanine floor'></img>
//                 </div>
//                 <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
//                     <img style={{ ...imageStyle }} className='gallery-image mt-2  ' src='/Images/2R (1)_edited.jpg' alt='mezzanine floor'></img>
//                 </div>
//                 <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
//                     <img style={{ ...imageStyle }} className='gallery-image mt-2 ' src='/Images/3img-industrial-mezzanine-floor_edited.jpg' alt='mezzanine floor'></img>
//                 </div>
//                 <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
//                     <img style={{ ...imageStyle }} className='gallery-image mt-2  ' src='/Images/4mezz1_edited.jpg' alt='mezzanine floor'></img>
//                 </div>
//                 <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
//                     <img style={{ ...imageStyle }} className='gallery-image mt-2  ' src='/Images/5R (1)_edited.jpg' alt='mezzanine floor'></img>
//                 </div>
//                 <div style={imageContainer} className='col-lg-6 col-md-6 col-sm-12 image-container'>
//                     <img style={{ ...imageStyle }} className='gallery-image mt-2 ' src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' alt='mezzanine floor'></img>
//                 </div>
//             </div> 
//         </div>
//     )
// }

// export default ImagePage


import React from 'react'
import '../Styles/ImagePage.css'

function ImagePage() {

    return (
        <div className='image-page-container'>
            <div className='scope'>
                <span style={{ '--i': 1 }}><img src='/Images/1R (1)_edited.jpg' alt='mezzanine floor' /></span>
                <span style={{ '--i': 2 }}><img src='/Images/2R (1)_edited.jpg' alt='mezzanine floor' /></span>
                <span style={{ '--i': 3 }}><img src='/Images/3img-industrial-mezzanine-floor_edited.jpg' alt='mezzanine floor' /></span>
                <span style={{ '--i': 4 }}><img src='/Images/4mezz1_edited.jpg' alt='mezzanine floor' /></span>
                <span style={{ '--i': 5 }}><img src='/Images/5R (1)_edited.jpg' alt='mezzanine floor' /></span>
                <span style={{ '--i': 6 }}><img src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' alt='mezzanine floor' /></span>
                <span style={{ '--i': 7 }}><img src='/Images/3img-industrial-mezzanine-floor_edited.jpg' alt='mezzanine floor' /></span>
                <span style={{ '--i': 8 }}><img src='/Images/4mezz1_edited.jpg' alt='mezzanine floor' /></span>
                <span style={{ '--i': 9 }}><img src='/Images/5R (1)_edited.jpg' alt='mezzanine floor' /></span>
                <span style={{ '--i': 10 }}><img src='/Images/6CUSTOM-MEZZANINE-FLOOR_edited.jpg' alt='mezzanine floor' /></span>
            </div>
        </div>
    )
}

export default ImagePage