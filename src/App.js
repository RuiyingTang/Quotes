import "./App.css";
import { useState } from "react";
import { quotesData } from "./data.js";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const getRandomQuote = () => {
  return quotesData[Math.floor(Math.random() * quotesData.length)];
};

// let styles = { backgroundColor: "white" };

function App() {
  const [quote, setQuote] = useState(getRandomQuote().quote);
  const [author, setAuthor] = useState(getRandomQuote().author);
  const [newColor, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  const newQuote = () => {
    // useEffect(() => {
    //   setTimeout(() => {
    setQuote((q) => (q = getRandomQuote().quote));
    setAuthor((a) => (a = getRandomQuote().author));
    setColor((c) => (c = colors[Math.floor(Math.random() * colors.length)]));
    //   }, 1000);
    // }, []);
  };
  return (
    <div className="App" style={{ backgroundColor: newColor }}>
      <div className="quoteBox" style={{ color: newColor }}>
        <div className="Text">
          <i class="fa fa-quote-left"> </i>

          <span id="text"> {quote}</span>
        </div>
        <div className="Author">
          <span id="Author">-{author}</span>
        </div>
        <div className="link">
          <a
            id="tweet-quote"
            target="_top"
            className="btn Button"
            style={{ backgroundColor: newColor, float: "left" }}
            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Believe%20you%20can%20and%20you%E2%80%99re%20halfway%20there.%22%20Theodore%20Roosevelt"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            id="tumblr-quote"
            target="_top"
            className="btn Button"
            style={{ backgroundColor: newColor, float: "left" }}
            href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Theodore%20Roosevelt&content=Believe%20you%20can%20and%20you%E2%80%99re%20halfway%20there.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
          >
            <i class="fa-brands fa-tumblr"></i>
          </a>
          <button
            id="newQuote"
            className="btn Button"
            style={{
              backgroundColor: newColor,
              float: "right",
            }}
            onClick={newQuote}
          >
            New quote
          </button>
        </div>
      </div>
      <div class="footer">by Tang</div>
    </div>
  );
}

export default App;
