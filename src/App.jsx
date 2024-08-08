import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";
import './App.css';



const getRandomIndex = () =>
  Math.round(Math.random() * (quotes.length - 1));

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  
  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState(quotes[getRandomIndex()]);
  const [randomColor, setRandomColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    setQuote(quotes[getRandomIndex()])
    setRandomColor(getRandomColor())
  };
  return (
    <>
    <div class="main">
      <div className="background" style={{ backgroundColor: randomColor, transition }}>

        <div id="quote-box">
          <div className="content-box" style={{color: randomColor, transition}}>
          <h1 id="text">
            <FaQuoteLeft size={30} style={{marginRight: "10px"}}/>
            {quote.quote}
          </h1>
          <p id="author">-{quote.author}</p>
          </div>
          <div class="actions">
            <button id="new-quote" class="button" style={{background: randomColor, transition}} onClick={handleNewQuote}>
              New Quote
            </button>
            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            style={{
            backgroundColor: randomColor,
            marginRight: "10px",
            transition
            }}>
            <FaTwitter color='white'/>
            </a>      
          </div> 
        </div>

  
      </div>
    </div>
    </>
  )
}

export default App
