import React, { useEffect, useRef, useState } from "react";
import { staticCode } from "./SampleCode";

export default function Typewriter() {
  const [currentText, setCurrentText] = useState("");
  let index = useRef(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentText((value) => value + staticCode.charAt(index.current));
      index.current += 1;
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText]);

  function handleReset() {
    index.current = -1;
    setCurrentText("");
  }
  return (
    <div>
      <button onClick={handleReset}>Reset</button>

      <h3>{currentText}</h3>
    </div>
  );
}
