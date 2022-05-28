import "./App.css";
import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      films: [],
    };
  }

  getNewCharacter() {
    const randomNumber = Math.ceil(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image,
          films: ["item 1", "item 2"],
          loadedCharacter: true,
          wiki: data.wiki,
        });
      });
  }

  displayCharacter() {
    var img = document.getElementById("c-img");
    var cWrap = document.getElementById("c-wrap");
    var info = document.getElementById("info");
    var content = document.getElementById("content");
    img.classList.add("active");
    cWrap.classList.add("c-wrap");
    info.classList.add("info-disable");
    content.classList.add("content-active");
  }

  Click() {
    this.getNewCharacter();
    this.displayCharacter();
  }

  render() {
    return (
      <>
        <div className="character-wrap" id="c-wrap">
          <div className="info" id="info">
            This is Star Wars random characters generator that displays random character. <br /> <br />
            Let's see in after how many character you find your favourite one.
          </div>
          <img
            src={this.state.image}
            alt="Character"
            id="c-img"
            className="character-img"
          />
          <div className="center">
          <div className="content" id="content">
            <div>Name : {this.state.name}</div>
            <div>Height : {this.state.height} m</div>
            <div className="homeworld">Homeworld : {this.state.homeworld}</div>
            <div>
              Wiki : <a href={this.state.wiki} target="_blank" rel="noreferrer">Open</a>
            </div>
          </div>
          <button type="button" onClick={() => this.Click()} className="btn">
            Get Random Character
          </button>
          </div>
        </div>

        {/* <embed src={this.state.wiki} type="" /> */}
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="Header">
        <header>
          <h1>Random Star War Characters Generator</h1>
        </header>
      </div>
      <StarWars />
    </div>
  );
}

export default App;
