import React, { useState, useRef, useEffect } from "react";
import musicButtonPause from "../../assets/partyIcons/pause.png";
import musicButtonPlay from "../../assets/partyIcons/play.png";
import musicFile from "../../assets/audio/music.mp3";
import "./musicButton.css";

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 1) Autoplay en mute al cargar (permitido)
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.muted = true;
    a.volume = 0;
    a.play()
      .then(() => {
        // Queda reproduciendo en silencio (no marcamos playing verdadero todavía)
      })
      .catch(() => {
        // Si falla, esperamos gesto igualmente
      });

    // 2) Primer gesto del usuario: desmutear y sonar
    const onFirstGesture = async () => {
      if (!a) return;
      try {
        a.muted = false;
        a.volume = 1;
        if (a.paused) await a.play();
        setIsPlaying(true);
      } catch {}
      window.removeEventListener("pointerdown", onFirstGesture, true);
      window.removeEventListener("keydown", onFirstGesture, true);
      window.removeEventListener("touchstart", onFirstGesture, true);
    };

    window.addEventListener("pointerdown", onFirstGesture, true);
    window.addEventListener("keydown", onFirstGesture, true);
    window.addEventListener("touchstart", onFirstGesture, true);

    return () => {
      window.removeEventListener("pointerdown", onFirstGesture, true);
      window.removeEventListener("keydown", onFirstGesture, true);
      window.removeEventListener("touchstart", onFirstGesture, true);
    };
  }, []);

  const toggleMusic = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      try {
        a.muted = false;
        a.volume = 1;
        await a.play();
        setIsPlaying(true);
      } catch (e) {
        console.log("Error al reproducir música:", e);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
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
