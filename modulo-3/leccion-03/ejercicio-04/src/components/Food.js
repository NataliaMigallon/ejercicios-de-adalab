import React from "react";
import PropTypes from "prop-types";

class Food extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <h2>Nombre: {this.props.name}</h2>
        <p>Descripción: {this.props.description}</p>
        <p>Cantidad: {this.props.quantity}</p>
        <p>Categoría: {this.props.category}</p>
        <p>Precio: {this.props.price}</p>
      </li>
    );
  }
}
Food.propTypes = {
  name: PropTypes.number.isRequired, //la consola detecta un error (buscado)
  description: PropTypes.string,
  quantity: PropTypes.number,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Food;
