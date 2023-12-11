import React from "react";
import "./index.css";

function Button(props) {
  const { title, onClick } = props;
  return (
    <button className="b" onClick={onClick}>
      {title}
    </button>
  );
}
export default Button;

// const [modal, setModal] = useState(false);

// const toggleModal = () => {
//   setModal(!modal);
// };
// return (
//   <>
//     <button className="btn-modal" onClick={toggleModal}>
//       submit button
//     </button>
//     {modal && (
//       <div className="modal">
//         <div className="overlay" onClick={toggleModal}></div>
//         <div className="modal-content">
//           <button className="close-modal" onClick={toggleModal}>
//             &times;
//           </button>

//           <BugReportingForm />
//         </div>
//       </div>
//     )}
//   </>
// );
