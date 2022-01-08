import React, { useState, useEffect } from 'react';

const Video = ({
  url,
  scale,
  position,  
  rotation,

}) => {
  
    return (
        
        <video
            url={url}
            scale={scale} 
            position={position}
            rotation={rotation}
        /> 
    )
  }

  export default Video;
