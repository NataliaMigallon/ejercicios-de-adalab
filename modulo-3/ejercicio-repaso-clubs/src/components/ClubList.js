import React from "react";
import Club from "./Club";

class ClubList extends React.Component {
  render() {
    //console.log(this.props.clubs); comprobar que el array se pinta cuando pasamos por props
    const item = this.props.clubs.map((clubItem, index) => {
      return (
        <li key={index}>
          <Club clubProp={clubItem} />
        </li>
      ); //si hubiera id en el listado pondríamos key{clubItem.id}
    });
    return (
      <div className="App">
        <ul>{item}</ul>
      </div>
    );
  }
}
export default ClubList;
