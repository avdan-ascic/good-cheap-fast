import { CiCircleRemove } from "react-icons/ci";
import Modal from "../UI/Modal";
import "../assets/styles/ValidationModal.css";

const ValidationModal = (props) => {
  return (
    <Modal>
      <div>
        <h3>
          You can NOT select all three options!{" "}
          <CiCircleRemove className="icon" onClick={props.onExitModalHandler} />
        </h3>
      </div>
    </Modal>
  );
};

export default ValidationModal;
