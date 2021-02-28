import React from "react";

class Films extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: "",
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleTitle(ev) {
    this.setState({ title: ev.target.value });
  }
  handleDescription(ev) {
    this.setState({ description: ev.target.value });
  }
  handleLanguage(ev) {
    this.setState({ language: ev.target.value });
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
              id="title"
              type="text"
              value={this.state.title}
              onChange={this.handleTitle}
            />
          </label>

          <label>
            Descripción:
            <textarea id="description" onChange={this.handleDescription} />
          </label>
          <label>
            Idioma:
            <select id="language" onChange={this.handleLanguage}>
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
