import logo from "./logo.svg";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { rotate: 0 },
      {
        rotate: 180,
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div className="App">
      <div className="helper"></div>
      <img src={logo} className="App-logo" alt="logo" ref={imgRef} />
    </div>
  );
}

export default App;
