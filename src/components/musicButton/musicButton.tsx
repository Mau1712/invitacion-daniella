import { useState, useRef } from "react";
import musicButtonPause from "../../assets/partyIcons/pause.png";
import musicButtonPlay from "../../assets/partyIcons/play.png";
import musicFile from "../../assets/audio/music.mp3";
import "./musicButton.css";

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = async () => {
    const a = audioRef.current;
    if (!a) return;

    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      try {
        a.muted = false;     // por si quedó muteado en alguna prueba previa
        a.volume = 1;
        await a.play();
        setIsPlaying(true);
      } catch (e) {
        console.log("No se pudo reproducir el audio:", e);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline           // ayuda en iOS
      >
        <source src={musicFile} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <button
        className={`musicButton ${isPlaying ? "playing" : "paused"}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        title={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <img
          className="musicButtonImg"
          src={isPlaying ? musicButtonPause : musicButtonPlay}
          alt={isPlaying ? "Pausar música" : "Reproducir música"}
        />
      </button>
    </>
  );
};

export default MusicButton;
