import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function CitiesDropdown({ query, setQuery }) {
  const { cities } = useContext(UserContext);
  const [citiesDisplay, setCitiesDisplay] = useState(false);
  const [h2Placeholder, setH2Placeholder] = useState("Destino");

  function handleClickDropdown() {
    setCitiesDisplay(!citiesDisplay);
  }

  function handleClickOption(e) {
    setQuery({ ...query, destination: e.target.id });
    setH2Placeholder(e.target.innerText);
  }

  return (
    <>
      <div onClick={handleClickDropdown} className="formItem dropdown">
        <h2>{h2Placeholder}</h2>
        <ul
          className={citiesDisplay ? "citiesList citiesListShow" : "citiesList"}
        >
          {cities.map((city, index) => {
            return (
              <li
                value={city.city}
                id={city.id}
                key={city.id}
                className="city"
                onClick={handleClickOption}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ display: "inline-block", marginRight: "5px" }}
                />
                {city.nombre}, {city.pais}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
