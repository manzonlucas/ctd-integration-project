import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { formatText } from "../../util";

export default function CitiesDropdown({ query, setQuery, returnId }) {
  const { cities } = useContext(UserContext);
  const [citiesList, setCitiesList] = useState([]);
  const [citiesDisplay, setCitiesDisplay] = useState(false);
  const [actualDestination, setActualDestination] = useState("");

  function changeDropdownDisplay() {
    setCitiesDisplay(!citiesDisplay);
  }

  function handleClickOption(e) {
    setQuery({ ...query, destination: e.target });
    setActualDestination(e.target.innerText);
    changeDropdownDisplay();
    // FIX THIS AND DIV ONBLUR
    // console.log('clicked!');
    // e.stopPropagation(e);
  }

  useEffect(() => {
    setCitiesList(cities);
  }, [cities]);

  function handleSearch(e) {
    const q = e.target.value.trim().toLowerCase();
    setActualDestination(e.target.value);
    setCitiesDisplay(true);

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
      <div
        onFocus={changeDropdownDisplay}
        // FIX THIS
        // onBlur={changeDropdownDisplay}
        className="formItem flex align-center border-none radius-5 shadow bold bg-white relative sm-w-100"
      >
        <input
          type="text"
          className="w-100 m-auto p-10 border-none"
          onChange={handleSearch}
          placeholder="Destino"
          value={actualDestination}
        />

        <ul className={`citiesList absolute w-100 top-50 ${citiesDisplay ? "display-block" : "display-none"}`} style={{ top: '50px' }}>

          {citiesList.map((city) => {
            return (
              <li
                value={city.city}
                id={city.id}
                key={city.id}
                className="city flex align-center bold bg-white border-grey"
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
