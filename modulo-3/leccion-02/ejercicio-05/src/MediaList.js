import React from "react";
import MediaCard from "./MediaCard";
import profile_photo1 from "./images/Barn-Owl-Isabella.jpg";
import profile_photo2 from "./images/Boxer-Canis-Hannah.jpg";
import profile_photo3 from "./images/Cavalier-King-Charles-Spaniel-Amelia.jpg";

const MediaList = () => {
  return (
    <>
      <ul className="App-container">
        <li>
          <MediaCard
            img={profile_photo1}
            name="Isabella Barn"
            date="4 enero 2020"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            read="Leer más..."
            likes="37"
          />
        </li>
        <li>
          <MediaCard
            img={profile_photo2}
            name="Hannah Boxer"
            date="6 agosto 2020"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            read="Leer más..."
            likes="50"
          />
        </li>
        <li>
          <MediaCard
            img={profile_photo3}
            name="Amelia Cavalier"
            date="10 febrero 2021"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            read="Leer más..."
            likes="70"
          />
        </li>
      </ul>
    </>
  );
};
export default MediaList;
