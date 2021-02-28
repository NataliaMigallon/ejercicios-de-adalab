import React from "react";

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberSearch: 0,
    };
    this.handleFilterNumber = this.handleFilterNumber.bind(this);
    this.renderNumbers = this.renderNumbers.bind(this);
  }

  handleFilterNumber(ev) {
    this.setState({
      numberSearch: ev.target.value,
    });
  }
  renderNumbers() {
    return (
      numbers
        .filter((number) => {
        console.log(number);
        return number.includes(value >= 6 this.state.handleFilterNumber);
      })
        .map((number, index) => {
          console.log(number);
          return <li key={index}>{number}</li>;
        })
    );
  }
  render() {
    return (
      <>
        <ul>{this.renderNumbers()}</ul>
        <form>
          <label>
            Número:
            <input
              type="text"
              name="name"
              value=""
              onChange={this.handleFilterNumber}
            />
          </label>
        </form>
      </>
    );
  }
}
export default App;
