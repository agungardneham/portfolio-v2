import ReactDom from "react-dom";

const Popup = ({ open, children, onPopUpClose }) => {
  if (!open) {
    return null;
  } else {
    return ReactDom.createPortal(
      <>
        <div className="popup__overlay"></div>
        <div className="popup">
          <div className="flex justify-end">
            <button onClick={onPopUpClose} className="popup__closebutton">
              X
            </button>
          </div>
          {children}
        </div>
      </>,
      document.getElementById("portal")
    );
  }
};

export default Popup;
