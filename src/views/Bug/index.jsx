import Button from "../Button";
import "./index.css";

function Bug(props) {
  const { bug, onBugDelete, onBugEdit } = props;
  return (
    <>
      <tr>
        <td>{bug.title}</td>
        <td>{bug.project}</td>
        <td>{bug.description}</td>
        <td>{bug.status}</td>
        <td>{bug.priority}</td>
        <td className="action">
          <div className="delete-btn">
            <Button
              onClick={() => {
                onBugDelete(bug.id);
              }}
              title="Delete"
            />
          </div>
          <div className="edit-btn">
            <Button
              onClick={() => {
                onBugEdit(bug);
              }}
              title="Edit"
            />
          </div>
        </td>
      </tr>
    </>
  );
}

export default Bug;
