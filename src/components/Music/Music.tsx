import React, { useEffect, useRef } from 'react';
import Styles from './Music.module.css';

interface MusicProps {
    isMusicPlaying: boolean;  // Accept the music playing state as a prop
}

const Music: React.FC<MusicProps> = ({ isMusicPlaying }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (isMusicPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isMusicPlaying]); 

    return (
        <div className={Styles["music-container"]}>
            <div className={Styles["music"]}>
                <audio ref={audioRef} controls loop>
                    <source src="Benediction of Dreams.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
}

export default Music;
