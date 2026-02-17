import { useState, useRef, useEffect } from 'react';
import './Music.css';

const MUSIC_TRACKS = [
  {
    id: 1,
    title: "Cedar and Snow and Something Darker",
    description: "An atmospheric journey through the resonance",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/YwJtWXrFnnPxpEXt.mp3",
    duration: 177,
  },
  {
    id: 2,
    title: "Resonance Session #2",
    description: "Exploring the depths of magical frequencies",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/IUhilhzLuOaewjNd.mp3",
    duration: 148,
  },
  {
    id: 3,
    title: "Resonance Session #3",
    description: "A shorter meditation on sound and power",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/vHWewSkDVSEXBZJc.mp3",
    duration: 94,
  },
  {
    id: 4,
    title: "Extended Resonance Composition",
    description: "The full immersive experience",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/LAOsLYRJGeyCoCxL.wav",
    duration: 960,
  },
];

function Music() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = MUSIC_TRACKS[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentTrackIndex < MUSIC_TRACKS.length - 1) {
        setCurrentTrackIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const skipForward = () => {
    if (currentTrackIndex < MUSIC_TRACKS.length - 1) {
      setCurrentTrackIndex(prev => prev + 1);
      setIsPlaying(true);
    }
  };

  const skipBack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(prev => prev - 1);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(false);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="music">
      <section className="music-hero">
        <h1>Resonance Sessions</h1>
        <p>Experience the magic of The Shadow Index through sound. These original compositions embody the book's resonance system, magic perceived through music.</p>
      </section>

      <section className="music-content">
        <div className="music-player">
          <audio ref={audioRef} src={currentTrack?.audioUrl} />

          {/* Current Track Info */}
          <div className="track-info">
            <h3>{currentTrack?.title}</h3>
            <p>{currentTrack?.description}</p>
          </div>

          {/* Progress Bar */}
          <div className="progress-section">
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="progress-bar"
            />
            <div className="time-display">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="player-controls">
            <button
              onClick={skipBack}
              disabled={currentTrackIndex === 0}
              className="control-btn"
            >
              ⏮
            </button>

            <button
              onClick={togglePlay}
              className="play-btn"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>

            <button
              onClick={skipForward}
              disabled={currentTrackIndex === MUSIC_TRACKS.length - 1}
              className="control-btn"
            >
              ⏭
            </button>
          </div>

          {/* Volume Control */}
          <div className="volume-control">
            <button onClick={toggleMute} className="volume-btn">
              {isMuted ? '🔇' : '🔊'}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>

          {/* Track List */}
          <div className="track-list">
            <h4>All Tracks</h4>
            {MUSIC_TRACKS.map((track, index) => (
              <button
                key={track.id}
                onClick={() => {
                  setCurrentTrackIndex(index);
                  setIsPlaying(true);
                }}
                className={`track-item ${index === currentTrackIndex ? 'active' : ''}`}
              >
                <span>{track.title}</span>
                <span>{formatTime(track.duration)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="music-description">
          <h2>What is Resonance?</h2>
          <p>In the world of The Shadow Index, magic isn't seen, it's heard. Resonance flows through Boston's streets like an invisible current, perceived as sound by those who can sense it. Practitioners don't cast spells; they compose them, wielding magic through music.</p>
          <p>These tracks aren't just a soundtrack. They're an immersive experience, allowing you to hear what the characters hear when resonance surges through the city. Each composition explores different aspects of the magical system, from haunting melodies to complex harmonic structures that mirror the book's themes.</p>
        </div>
      </section>
    </div>
  );
}

export default Music;
