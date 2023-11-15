import React from 'react'

function HomePage() {
    return (
        <div>
            <div className="row d-flex justify-content-between">
                <div className="col-md-4">
                    <img className='home-page-image img-fluid mt-2 h-100 w-100' src='Images/OIP.jpeg' alt='mezzanine flooring' />
                </div>
                <div className="col-md-4">
                    <img className='home-page-image img-fluid mt-2 h-100' src='Images/Entresol-Noordrek-2017.webp' alt='mezzanine flooring' />
                </div>
                <div className="col-md-4">
                    <img className='home-page-image img-fluid mt-2 h-100' src='Images/838496f8dde33786e17180f7dcb3426d.jpg' alt='mezzanine flooring' />
                </div>
            </div>
        </div>


    )
}

export default HomePage