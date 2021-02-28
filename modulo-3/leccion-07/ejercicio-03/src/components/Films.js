import React from "react";

class Films extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: "",
      genres: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleGenres = this.handleGenres.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleInput(ev) {
    const key = ev.target.name;
    const newState = {
      [key]: ev.target.value,
    };
    this.setState(newState);
  }
  handleGenres(ev) {
    if (ev.target.checked) {
      this.setState((prevState) => {
        prevState.genres.push(ev.target.value);
        return {
          genres: prevState.genres,
        };
      });
    } else {
      this.setState((prevState) => {
        const genres = prevState.genres.filter(
          (genre) => genre !== ev.target.value
        );
        return {
          genres: genres,
        };
      });
    }
  }

  handleReset() {
    // con reset vacío el estado, o lo pongo con los mismos datos del estado inicial que he puesto en el constructor
    this.setState({
      title: "",
      description: "",
      language: "Spanish",
      genres: [],
    });
  }

  handleForm(ev) {
    ev.preventDefault();
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
        <form className="form" onSubmit={this.handleForm}>
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
          <label>
            Terror:
            <input
              type="checkbox"
              name="genres"
              value="terror"
              checked={this.state.genres.includes("terror")}
              onChange={this.handleGenres}
            />
          </label>
          <label>
            Drama:
            <input
              type="checkbox"
              name="genres"
              value="drama"
              checked={this.state.genres.includes("drama")}
              onChange={this.handleGenres}
            />
          </label>
          <label>
            Comedia:
            <input
              type="checkbox"
              name="genres"
              value="comedia"
              checked={this.state.genres.includes("comedia")}
              onChange={this.handleGenres}
            />
          </label>
          <button onClick={this.handleReset}>Reset</button>
        </form>
        <article className="card">
          <p>Título:{this.state.title}</p>
          <p>Descripción:{this.state.description}</p>
          <p>Idioma:{this.renderLanguage()}</p>
          <p>Género:{this.state.genres.join(", ")}</p>
        </article>
      </div>
    );
  }
}
export default Films;
