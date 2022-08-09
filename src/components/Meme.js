import memesData from "../memesData.js";



function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form__input" 
                    />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form__input" 
                    />
                <button
                    className="form__button"
                    onClick={getMemeImage}>
                    Get a new meme image 🖼
                    </button>
            </div>
        </main>
    )
}

export default Meme