import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment">
        <form action="post" className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
