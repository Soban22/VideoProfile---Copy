import React from 'react';
import './videoassets.css';

const VideoAssets = () => {
  return (
    <div className="videos-main">
      <h1>Video Gallery</h1>
      <div className='video-container'>

      <iframe
        width="600"
        height="100"
        src="https://youtube.com/embed/APSuI0o0VsU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        width="600"
        height="100"
        src="https://youtube.com/embed/qOBDfEorfpc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        width="600"
        height="100"
        src="https://youtube.com/embed/vb9kEctrLkk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    
      </div>

      <div className='video-container'>

      <iframe
        width="600"
        height="100"
        src="https://youtube.com/embed/WZNuGuin-xA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        width="600"
        height="100"
        src="https://youtube.com/embed/VylCtQnskkE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        width="600"
        height="100"
        src="https://youtube.com/embed/Nm1jCkFQYps"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    
      </div>

    </div>
  );
};

export default VideoAssets;
