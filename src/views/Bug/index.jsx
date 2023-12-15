import { useCallback, useMemo } from "react";
import Button from "../Button";
// import "./index.css";
// import editImg from "./assets/edit.png";

// function Bug(props) {
//   const { bug, onBugDelete, onBugEdit } = props;
//   return (
//     <>
//       <tr>
//         <td>{bug.title}</td>
//         <td>{bug.project}</td>
//         <td>{bug.description}</td>
//         <td>{bug.status}</td>
//         <td>{bug.priority}</td>
//         <td className="action">
//           <Button
//             onClick={() => {
//               if (window.confirm("Delete the item?")) onBugDelete(bug.id);
//             }}
//             title="Delete"
//             className="btn-edit"
//           >
//             <img src={editImg} alt="edit-icon" width="20px" />
//           </Button>

//           <Button
//             onClick={() => {
//               onBugEdit(bug);
//             }}
//             title="Edit"
//             className="btn-edit"
//           />
//         </td>
//       </tr>
//     </>
//   );
// }

// export default Bug;
import "./index.css";
import editImg from "./assets/edit1.png";
import deleteImg from "./assets/delete.png";

function Bug(props) {
  const { bug, onBugDelete, onBugEdit } = props;

  const handleDeleteClick = useCallback(() => {
    if (window.confirm("Delete the item?")) {
      return onBugDelete(bug.id);
    }
  }, [onBugDelete, bug]);

  const handleEditClick = useCallback(() => {
    return onBugEdit(bug);
  }, [onBugEdit, bug]);

  const priorityClassName = useMemo(() => {
    if (bug.priority === "High") {
      return "high-cell";
    }
    if (bug.priority === "Low") {
      return "low-cell";
    }
    if (bug.priority === "Medium") {
      return "medium-cell";
    }
    return undefined;
  }, [bug.priority]);

  return (
    <tr>
      <td>{bug.title}</td>
      <td>{bug.project}</td>
      <td>{bug.description}</td>
      <td>{bug.status}</td>

      <td className={priorityClassName}>
        <div className="priority-div">{bug.priority}</div>
      </td>
      <td>
        <div className="action">
          <div className="img-edit" onClick={handleEditClick}>
            <div className="btn-edit"></div>
            <img
              src={editImg}
              alt="edit-icon"
              width="15px"
              height="15px"
              title="Edit"
              className="btn-edit1"
            />
          </div>

          <div className="img-delete" onClick={handleDeleteClick}>
            <div className="btn-delete">
              <img
                src={deleteImg}
                alt="edit-icon"
                width="20px"
                title="Delete"
                className="btn-delete1"
              />
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default Bug;

//   onClick={() => {
//     onBugEdit(bug);
//   }}
//   title="edit"
//   className="btn-edit"
// />
