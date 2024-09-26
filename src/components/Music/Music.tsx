import styles from './Music.module.css';

const Music = () => {
    return (
        <div className={styles["music-container"]}>
            <div className={styles["music"]}>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/7EUrWoNsZVE?autoplay=1&loop=1&playlist=7EUrWoNsZVE"  
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen 
                />
            </div>
        </div>
    );
}

export default Music;
