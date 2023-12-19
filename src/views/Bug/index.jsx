import { useCallback, useMemo } from "react";
import Button from "../Button";
import "./bug.css";

function Bug(props) {
  const { bug, onBugDelete, onBugEdit } = props;
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
    <>
      <tr>
        <td>{bug.title}</td>
        <td>{bug.project}</td>
        <td>{bug.description}</td>
        <td>{bug.status}</td>
        <td className={priorityClassName}>
          <div className="priority-div">{bug.priority}</div>
        </td>
        <td className="action">
          <div className="table-icons">
            <i
              className="fas fa-pencil-alt"
              onClick={() => {
                onBugEdit(bug);
              }}
              title="Edit"
            ></i>
            <i
              className="far fa-trash-alt"
              onClick={() => {
                if (window.confirm("Delete the item?")) onBugDelete(bug.id);
              }}
              title="Delete"
            ></i>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Bug;
