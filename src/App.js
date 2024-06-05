import "./App.css";
import React, { useState, useEffect } from "react";

const songs = [
  ["brr", "fiu", "cric-cric", "brrah"],
  ["pep", "birip", "trri-trri", "croac"],
  ["bri-bri", "plop", "cric-cric", "brrah"],
];

export const App = () => {
  const [actualSong, setActualSong] = useState("");
  const [response, setResponse] = useState([]);

  const searchSong = () => {
    for (const song of songs) {
      const index = song.indexOf(actualSong);
      if (index !== -1) {
        if (actualSong === "croac" || actualSong === "brrah") {
          setResponse([]);
        } else {
          const sequenceSounds = song.slice(index + 1);
          setResponse(sequenceSounds);
        }
        return;
      }
    }
    setResponse([]);
  };

  useEffect(() => {
    searchSong();
  }, [actualSong]);

  const handleChange = (event) => {
    setActualSong(event.target.value);
  };

  return (
    <div className="App">
      <h4>El lago musical</h4>
      <input
        type="text"
        value={actualSong}
        onChange={handleChange}
        placeholder="Sound"
      />
      <div style={{ marginTop: "16px" }}>
        {response.length > 0 ? (
          response.map((sound, index) => (
            <span key={index} className="sound">
              {sound}
              {index < response.length - 1 && ", "}
            </span>
          ))
        ) : actualSong === "croac" || actualSong === "brrah" ? (
          <p>None match with {actualSong}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
