import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheeps: 0,
      sheepsInArray: [],
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    console.log("Me han clickado");
    // this.setState({
    //   sheeps: this.state.sheeps + 1 (Esto no es buena práctica porque sheeps depende de sheeps, es decir el estado depende de sí mismo. Incrimenetar o pushear sí hace que un estado dependa de sí mismo)
    // });
    this.setState((prevState) => {
      // prevState.sheepsInArray.push(<li>Oveja</li>);
      return {
        sheeps: prevState.sheeps + 1,
        // no nos gusta guardar en el estado código JSX, por ello la siguiente línea no está bien
        sheepsInArray: [...prevState.sheepsInArray, <li>Oveja</li>],
        // es más fácil guardar datos en el estado y en el render convertirlos a código JSX
        // además recordad que en el estado debemos intentar guardar los datos sin modificar
      };
    });
  }

  render() {
    console.log(this.state);

    // pinto el listado usando for clásico porque no depende de arrays.
    // en este caso no podemos usar map porque depende de que haya un array,
    // y aquí no tenemos, solo tenemos un número.
    const result = [];
    for (let index = 0; index < this.state.sheeps; index++) {
      // no tengo un array por ello pongo el número de ovejas (this.state.sheeps)
      result.push(<li key={index}>ZZZZZZ...</li>); // aquí pusheamos tantos <li> como ovejas haya
    }

    // pinto el resto de cosas
    return (
      <div>
        <h1>Las ovejas</h1>
        <h2>Número total de ovejas: {this.state.sheeps}</h2>
        <button className="form__btn" onClick={this.handleButton}>
          Añadir oveja
        </button>
        <h2>Listado de ovejas: versión con contador</h2>
        <ul>{result}</ul>
        <h2>Listado de ovejas: versión con arrays (no nos gusta esta forma)</h2>
        <ul>{this.state.sheepsInArray}</ul>
      </div>
    );
  }
}

export default App;
