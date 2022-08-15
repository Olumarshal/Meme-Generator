/* eslint-disable no-unused-vars */
import React from "react";
import memesData from "../memesData.js";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input 
            type="text" 
            placeholder="Top text" 
            className="form__input"
            name="topText"
            value={meme.topText}
            onchange={handleChange} 
            />
        <input 
            type="text" 
            placeholder="Bottom text" 
            className="form__input"
            name="bottomText"
            value={meme.bottomText} 
            onChange={handleChange}
            />
        <button 
            className="form__button" 
            onClick={getMemeImage}
            >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme__image" alt="" />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
