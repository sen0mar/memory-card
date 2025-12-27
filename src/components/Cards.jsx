import { useState, useEffect } from "react";
import imagesData from "../images.json";

import "../styles/cards.css";

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Cards = ({ onCardClick }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const selected = shuffle(imagesData).slice(0, 9);
    const processedImages = selected.map((img) => ({
      ...img,
      src: `/images/${img.src}`,
    }));
    setImages(processedImages);
  };

  const handleCardClick = (cardId) => {
    // Call parent click handler first
    onCardClick(cardId);

    // Then reshuffle the entire deck
    shuffleCards();
  };

  return (
    <div className="cards">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt={img.name}
          onClick={() => handleCardClick(img.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
