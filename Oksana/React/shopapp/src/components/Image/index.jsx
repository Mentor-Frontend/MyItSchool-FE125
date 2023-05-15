import React from "react";


const Image=(props)=>{
    return (
      <div style={{ 
        height: `${props.height}`,
        top: `${props.top}`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',  
        backgroundRepeat: 'no-repeat',        
        backgroundImage: `url(${props.sendUrl})` 
      }}>
        
      </div>
      );


}

export default Image;
