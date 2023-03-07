import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Home.css";
import ValidationModal from "./ValidationModal";

const Home = () => {
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState({
    Good: false,
    Fast: false,
    Cheap: false,
  });

  let navigate = useNavigate();

  const pickHandler = (pick) => {
    if (selected.includes(pick) || clicked[pick]) {
      return;
    } else {
      setSelected([...selected, pick]);
      setClicked({ ...clicked, [pick]: true });
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
    setClicked({ Good: false, Fast: false, Cheap: false });
  };

  return (
    <div className="container">
      {showModal && <ValidationModal onExitModalHandler={exitModalHandler} />}
      <h1>Pick two options!</h1>
      <div className="circles_wrapper">
        <div
          className="circle"
          onClick={() => pickHandler("Good")}
          style={{ backgroundColor: "#2596be" }}
        >
          <div className="circle_content">Good</div>
          {clicked.Good && <div className="tick">&#10003;</div>}
        </div>
        <div
          className="circle"
          onClick={() => pickHandler("Cheap")}
          style={{ backgroundColor: "#2FE656" }}
        >
          <div className="circle_content">Cheap</div>
          {clicked.Cheap && <div className="tick">&#10003;</div>}
        </div>
        <div
          className="circle"
          onClick={() => pickHandler("Fast")}
          style={{ backgroundColor: "#CD5C5C" }}
        >
          <div className="circle_content">Fast</div>
          {clicked.Fast && <div className="tick">&#10003;</div>}
        </div>
      </div>
      <button onClick={generateHandler} disabled={selected.length < 2}>
        GENERATE DIAGRAM
      </button>
    </div>
  );
};

export default Home;
