import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "../../src/successfulReservation.css";
import { Link } from "react-router-dom";

export default function SuccessfulProductCreation() {
  return (
    <>
      <Layout>
        <div className="successfulContainer">
          <div className="successful">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{
                display: "inline-block",
                marginRight: "5px",
                color: "#1DBEB4",
                height: "18%",
                width: "18%",
              }}
            />
            <h4>Tu propiedad se ha creado con éxito</h4>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <button className="okButton">volver</button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
