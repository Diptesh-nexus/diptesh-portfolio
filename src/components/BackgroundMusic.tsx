
import { useState, useRef, useEffect } from 'react';
import { Music, MicOff } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={togglePlay}
        className="bg-matteBlack/80 backdrop-blur-sm border border-softGreen/30 rounded-full p-3 
                hover:border-softGreen/60 transition-all duration-300 focus:outline-none group"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? (
          <Music size={20} className="text-neonGreen animate-pulse" />
        ) : (
          <MicOff size={20} className="text-softGreen group-hover:text-neonGreen transition-colors" />
        )}
      </button>
      <div className="absolute -top-10 right-0 bg-charcoal/90 backdrop-blur-sm px-3 py-1 rounded text-xs 
                text-softGreen opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {isPlaying ? "Pause Music" : "Play Music"}
      </div>
    </div>
  );
};

export default BackgroundMusic;
