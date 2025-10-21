import { sculptureList } from "../API/Data";
import { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      alert("You’re at the last sculpture!");
    }
  }

  function previousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      alert("You’re at the first sculpture!");
    }
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={previousClick}>Previous</button>
      <button onClick={handleClick}>Next</button>

      <h2>
        <i>{sculpture.name}</i> by <strong>{sculpture.artist}</strong>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
