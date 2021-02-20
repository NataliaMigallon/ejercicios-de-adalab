import React from "react";
import "./App.css";

class MediaCard extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div>
              <img
                src={this.props.img}
                className="profile_photo"
                alt="profile_photo"
              />
            </div>
            <div className="profile_info">
              <h1 className="profile_name">{this.props.name}</h1>
              <h2 className="date">{this.props.date}</h2>
            </div>
          </div>
        </header>
        <main className="App-main">
          <p className="text">{this.props.text}</p>
        </main>
        <footer className="App-footer">
          <div className="container_footer">
            <p className="read_more">{this.props.read}</p>
            <div className="wrapped-likes-heart">
              <span className="likes">{this.props.likes}</span>
              <i class="heart_icon fa fa-heart" aria-hidden="true"></i>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default MediaCard;
