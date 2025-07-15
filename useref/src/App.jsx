import { useRef } from "react";
import "./App.css";

function App() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current && videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current && videoRef.current.pause();
  };

  return (
    <>
      <div className="app">
        <div className="app-container">
          <video
            ref={videoRef}
            width="820"
            height="540"
            controls={false}
            src="rnw.mp4"
          />
          <div className="controls">
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
          </div>
        </div>
        <img
          src="https://student.rnwmultimedia.com/assets/images/logo-white.png"
          alt=""
          width="820"
          height="540"
        />
      </div>
    </>
  );
}

export default App;
