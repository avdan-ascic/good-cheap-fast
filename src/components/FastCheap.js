import image3 from "../assets/images/picture3.png";
import "../assets/styles/FastCheap.css";
import { useNavigate } from "react-router-dom";

const FastCheap = () => {
  let navigate = useNavigate();

  const backHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="wrapper-fc">
        <h1>Fast - Cheap</h1>
        <p>
          Fast & Cheap = Poor Quality. The project will be done quickly and on a
          shoe string budget, and you will get what you pay for. Don´t expect
          all of the requirements to be met and expect some bugs and
          unpredictable behavior becuase the development team didn´t have the
          time or resources to thoroughly design or test the software.
        </p>

        <img src={image3} alt="Fast-Cheap" />
       
      </div>
      <div className="btn-fc">
      <button onClick={backHandler}>GO BACK</button>
      </div>
     
    </div>
  );
};

export default FastCheap;
