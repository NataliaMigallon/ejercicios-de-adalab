import React from "react";

class Films extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    const key = ev.target.name;
    const newState = {
      [key]: ev.target.value,
    };
    this.setState(newState);
  }

  renderLanguage() {
    if (this.state.language === "Spanish") {
      return "Español";
    } else if (this.state.language === "English") {
      return "Inglés";
    } else if (this.state.language === "Portuguese") {
      return "Portugués";
    }
  }
  render() {
    return (
      <div className="container">
        <form className="form">
          <label>
            Título:
            <input
              name="title"
              id="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Descripción:
            <textarea
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleInput}
            />
          </label>
          <label>
            Idioma:
            <select
              name="language"
              id="language"
              value={this.state.language}
              onChange={this.handleInput}
            >
              <option value=""></option>
              <option value="Spanish">Español</option>
              <option value="English">Inglés</option>
              <option value="Portuguese">Portugués</option>
            </select>
          </label>
        </form>
        <article className="card">
          <p>Título:{this.state.title}</p>
          <p>Descripción:{this.state.description}</p>
          <p>Language:{this.renderLanguage()}</p>
        </article>
      </div>
    );
  }
}
export default Films;
