import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { formatText } from "../../util";

export default function CitiesDropdown({ query, setQuery }) {
  const { cities } = useContext(UserContext);
  const [citiesList, setCitiesList] = useState([]);
  const [citiesDisplay, setCitiesDisplay] = useState(false);
  const [actualDestination, setActualDestination] = useState("");

  function handleClickDropdown() {
    setCitiesDisplay(!citiesDisplay);
  }

  function handleClickOption(e) {
    setQuery({ ...query, destination: e.target.id });
    setActualDestination(e.target.innerText);
    // setCitiesList(actualDestination);
  }

  useEffect(() => {
    setCitiesList(cities);
  }, [cities]);

  function handleSearch(e) {
    const q = e.target.value.trim().toLowerCase();
    setActualDestination(e.target.value);

    const search = cities.filter((city) => {
      return (
        city.nombre.toLowerCase().includes(q) ||
        city.pais.toLowerCase().includes(q)
      );
    });

    setCitiesList(search);
  }

  return (
    <>
      <div onClick={handleClickDropdown} className="formItem dropdown">
        <input
          type="text"
          className="w-100 m-auto p-10 border-none"
          onChange={handleSearch}
          placeholder="Destino"
          value={actualDestination}
        />

        <ul
          className={citiesDisplay ? "citiesList citiesListShow" : "citiesList"}
        >
          {citiesList.map((city) => {
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
                {formatText(city.nombre)}, {formatText(city.pais)}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
