import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import styles from './index.module.css';

function VideoPlayer({ videoId }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://camera-dashboard-be.onrender.com/api/videos/${videoId}`,
          {
            headers: {
              range: 'bytes=0-',
            },
          },
        );

        if (response.ok) {
          const videoBlob = await response.blob();
          const videoUrl = URL.createObjectURL(videoBlob);
          videoRef.current.src = videoUrl;
        } else {
          console.error(
            'Failed to fetch video:',
            response.status,
            response.statusText,
          );
        }
      } catch (error) {
        console.error('Error while fetching video:', error);
      }
    };

    fetchVideo();

    return () => {
      URL.revokeObjectURL(videoRef?.current?.src);
    };
  }, [videoId]);

  return (
    <video ref={videoRef} muted autoPlay className={styles.CameraItem}>
      Your browser does not support the video tag.
    </video>
  );
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoPlayer;
