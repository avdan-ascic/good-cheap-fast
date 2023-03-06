import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/picture1.png";
import "../assets/styles/GoodFast.css";

const GoodFast = () => {
  let navigate = useNavigate();

  const backHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="wrapper-gf">
        <h1>Good - Fast</h1>
        <p>
          Good & Fast = Expensive. High quality software will be produced very
          quickly to meet a customer´s time constraint. However, this aproach
          will require additional staff, extended work hours, additional
          testing, etc. -- all things that will drive up the cost of the
          project.
        </p>
        <img src={image1} alt="Good-Fast" />
      </div>
      <div className="btn-gf">
        <button onClick={backHandler}>GO BACK</button>
      </div>
    </div>
  );
};

export default GoodFast;
