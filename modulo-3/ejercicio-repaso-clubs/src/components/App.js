import React from "react";
import clubs from "../data/data.json"; //buenas prácticas, que el listado de datos esté en el nivel superior, en el fichero madre
import ClubList from "./ClubList";

class App extends React.Component {
  render() {
    //console.log(clubs); comprobar de inicio que me pinta el array en consola
    return <ClubList clubs={clubs} />;
  }
}
export default App;
