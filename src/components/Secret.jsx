import React, { useRef, useState } from 'react';

function Secret() {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [showVideo, setShowVideo] = useState(false);
    const [isVideoPlayed, setIsVideoPlayed] = useState(false);

    const handlePointClick = async () => {
        if (!isVideoPlayed) {
            setShowVideo(true);
            setIsVideoPlayed(true);
            await handlePlayMedia();
        }
    };

    const handlePlayMedia = async () => {
        if (videoRef.current && audioRef.current) {
            try {
                await videoRef.current.play();
                await audioRef.current.play();
            } catch (err) {
                console.error("Error atempting to play media:", err);
            }
        }
    };

    return (
        // This is the clickable.
        <div>
            {!isVideoPlayed && (
                <div 
                    onClick={handlePointClick} 
                    className="absolute"
                    style={{
                        top: '28vh', 
                        left: '48vw',
                        transform: 'translate(-50%, -50%)',
                        width: '5vw',
                        height: '5vw',
                        cursor: 'pointer',
                        opacity: 0,
                        pointerEvents: 'auto'
                    }}
                ></div>
            )}

            {/*This is the video. */}
            {showVideo && (
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 bg-black z-20"
                    style={{
                        top: '35vh',
                        width: '50vw',
                        height: 'auto',
                    }}
                >
                    <video 
                        ref={videoRef} 
                        className="w-full h-auto"
                        src="../src/assets/secret/secret.mp4"
                        muted={false}
                        autoPlay
                        controls={false}
                    >
                        Your browser does not support the video element.
                    </video>
                </div>
            )}

            {/*Second audio in case the video does not work, but for some reason it works now, I will not touch it, too afraid. */}
            <audio 
                ref={audioRef} 
                src="../src/assets/secret/secret.mp3"
                muted={false}
            >
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default Secret;
