import "./styles.css";

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s1: "",
      s2: "",
      isAnagram: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkAnagram = this.checkAnagram.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  checkAnagram() {
    const { s1, s2 } = this.state;
    // Remove whitespace and convert to lowercase to ensure case-insensitive comparison
    const sortedS1 = s1
      .replace(/\s/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    const sortedS2 = s2
      .replace(/\s/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    const isAnagram = sortedS1 === sortedS2;
    this.setState({
      isAnagram
    });
  }

  render() {
    const { s1, s2, isAnagram } = this.state;
    return (
      <div>
        <h1>Anagram Checker</h1>
        <label>
          String 1:
          <input
            type="text"
            name="s1"
            value={s1}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          String 2:
          <input
            type="text"
            name="s2"
            value={s2}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.checkAnagram}>Check Anagram</button>
        <br />
        {isAnagram ? (
          <p>
            {s1} and {s2} are anagrams of each other!
          </p>
        ) : (
          <p>
            {s1} and {s2} are not anagrams of each other.
          </p>
        )}
      </div>
    );
  }
}

export default App;
