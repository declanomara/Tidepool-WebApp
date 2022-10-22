import React from "react";

function ImageBehind() {
  return (
    <div className="text-center" style={{ 
        backgroundImage: `url("https://tidepool-cdn.s3.amazonaws.com/tidepool-highres.jpg")`,
        backgroundSize: 'cover',
        height: '50vh',
        width: '100vw',
        opacity: 0.9,
        display: 'flex',
        'align-items': 'center', /* Vertical center alignment */
        'justify-content': 'center' /* Horizontal center alignment */
      }}>
        <span style={{'display': 'inline-block', 'vertical-align': 'middle'}}>
          <h1 className='text-white font-weight-light'>Discover financial freedom with <span className="font-weight-bold">Tidepool</span>.</h1>
        </span>

    </div>
  )
}

export default ImageBehind;