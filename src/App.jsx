import HeroSection from "./sections/Hero";
import About from "./sections/About";
import Memes from "./sections/Memes";
import { useState, useRef, useEffect } from "react";
import theme from "./assets/MR_WASHEE_WASHEE.mp3";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    // Attempt to autoplay the audio
    if (audioElement) {
      audioElement.muted = false; // Unmute the audio
      audioElement
        .play()
        .then(() => setIsPlaying(true)) // Audio successfully played
        .catch((err) => {
          console.error("Audio autoplay failed:", err);
        });
    }
  }, []); // Run once on component mount

  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Simulate all assets loading, including the video
  const handleAssetsLoaded = () => {
    setIsLoaded(true); // Set loading to false when assets are ready
  };
  return (
    <div>
      {!isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-[1000]">
          <button
            className="bg-blue-500 text-white p-4 rounded-lg text-lg"
            onClick={() => {
              setIsLoaded(true);
              const audioElement = audioRef.current;
              if (audioElement) {
                audioElement
                  .play()
                  .catch((err) => console.error("Error playing audio:", err));
              }
            }}
          >
            You may begin
          </button>
        </div>
      )}
      {/* Background music */}
      <audio autoPlay loop ref={audioRef} id="audio">
        <source src={theme} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* Play/Pause Button */}
      <button
        className="text-white text-[1.2rem]"
        onClick={toggleAudio}
        style={{
          margin: "10px",
          padding: "10px",
          fontSize: "18px",
          position: "fixed",
          top: "5px",
          right: "5px",
          zIndex: "100",
        }}
      >
        {isPlaying ? "Mute" : "Unmute"}
      </button>
      <HeroSection onAssetsLoaded={handleAssetsLoaded} />
      <About />
      <Memes />
    </div>
  );
};

export default App;
