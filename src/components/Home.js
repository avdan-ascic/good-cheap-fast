import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Home.css";
import ValidationModal from "./ValidationModal";

const Home = () => {
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [disabled, setDisabled] = useState();
  let navigate = useNavigate();

  const pickHandler = (pick) => {
    if (selected.includes(pick)) {
      setSelected(selected.filter((p) => p !== pick));
    } else {
      setSelected([...selected, pick]);
    }
  };

  const generateHandler = () => {
    if (selected.length !== 2) {
      setShowModal(true);
      return;
    }

    let path = "";
    if (selected.includes("Good") && selected.includes("Fast")) {
      path = "/good-fast";
    } else if (selected.includes("Good") && selected.includes("Cheap")) {
      path = "/good-cheap";
    } else if (selected.includes("Fast") && selected.includes("Cheap")) {
      path = "/fast-cheap";
    }

    navigate(path);
  };

  const exitModalHandler = () => {
    setShowModal(false);
    setSelected([]);
  };

  let disable = selected.length >= 2 ? false : true

  return (
    <div className="container">
      {showModal && <ValidationModal onExitModalHandler={exitModalHandler} />}
      <h1>Pick two options!</h1>
      <div className="options">
        <div
          className={`pick${selected.includes("Good") ? "selected" : ""}`}
          style={{ backgroundColor: "#2596be" }}
          onClick={() => pickHandler("Good")}
        >
          Good
        </div>
        <div
         className={`pick${selected.includes("Cheap") ? "selected" : ""}`}
          style={{ backgroundColor: "#2FE656" }}
          onClick={() => pickHandler("Cheap")}
        >
          Cheap
        </div>
        <div
         className={`pick${selected.includes("Fast") ? "selected" : ""}`}
          style={{ backgroundColor: "#CD5C5C" }}
          onClick={() => pickHandler("Fast")}
        >
          Fast
        </div>
      </div>
      <button
        onClick={generateHandler}
        disabled={disable}
      >
        GENERATE DIAGRAM
      </button>
    </div>
  );
};

export default Home;
