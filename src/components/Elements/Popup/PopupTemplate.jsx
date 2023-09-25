const PopupTemplate = ({ children, onPopUpClose }) => {
  return (
    <>
      <div className="popup__overlay"></div>
      <div className="popup">
        <div className="flex justify-end">
          <button onClick={onPopUpClose} className="popup__closebutton">
            &times;
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default PopupTemplate;

// const PopupTemplate = ({ open, children, onPopUpClose }) => {
//   if (!open) {
//     return null;
//   } else {
//     return ReactDom.createPortal(
//       <>
//         <div className="popup__overlay"></div>
//         <div className="popup">
//           <div className="flex justify-end">
//             <button onClick={onPopUpClose} className="popup__closebutton">
//               &times;
//             </button>
//           </div>
//           {children}
//         </div>
//       </>,
//       document.getElementById("portal")
//     );
//   }
// };
