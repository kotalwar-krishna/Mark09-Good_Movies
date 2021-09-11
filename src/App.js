import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDb = {
  Action: [
    { name: "Tanhaji", rating: "7.6/10" },
    { name: "Bahubali-2", rating: "8.2/10" },
    { name: "Singham", rating: "7/10" }
  ],

  Comedy: [
    { name: "Welcome", rating: "8.1/10" },
    { name: "Hera Pheri", rating: "8.5/10" },
    { name: "Malamaal Weekly", rating: "8.3/10" }
  ],
  Horror: [
    { name: "Raaz", rating: "6.5/10" },
    { name: "Phoonk 2", rating: "5.5/10" },
    { name: "Bhoot Returns", rating: "5.6/10" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Good Movies </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite Movies. Select a list to get started
      </p>

      <div>
        {Object.keys(movieDb).map((genre) => (
          <button
            className="btn-style"
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "20%" }}>
          {movieDb[selectedGenre].map((movies) => (
            <li key={movies.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movies.name} </div>
              <div style={{ fontSize: "smaller" }}> {movies.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
