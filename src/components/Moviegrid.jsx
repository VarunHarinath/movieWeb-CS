// import React from "react";
// import "../styles.css";

// const Moviegrid = () => {
//     const age =10;
//   return (
//     <>
//     <div>
//         {age}
//     </div>
//     </>
//   )
// };

// export default Moviegrid;

import React from "react";
import { useState, useEffect } from "react";

const Moviegrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  });
  return (
    <>
      <div>
        <h1>{movies.length}</h1>
      </div>
    </>
  );
};

export default Moviegrid;
