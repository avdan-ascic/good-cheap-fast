import { useNavigate } from "react-router-dom";
import image2 from "../assets/images/picture2.png";
import "../assets/styles/GoodCheap.css";

const GoodCheap = () => {
  let navigate = useNavigate();

  const backHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="wrapper-gc">
        <h1>Good - Cheap</h1>
        <p>
          Good & Cheap = Slow. High quality software will be produced; however
          the project tempo will be slow. Other projects will take priority over
          this project and interrupt its schedule frequently.
        </p>
        <img src={image2} alt="Good-Cheap" />
      </div>
      <div className="btn-gc">
        <button onClick={backHandler}>GO BACK</button>
      </div>
    </div>
  );
};

export default GoodCheap;
