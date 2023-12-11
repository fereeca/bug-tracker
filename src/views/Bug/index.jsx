import Button from "../Button";
import "./index.css";

function Bug(props) {
  const { bug, onBugDelete } = props;
  return (
    <>
      <tr>
        <td>{bug.title}</td>
        <td>{bug.project}</td>
        <td className="description">
          {bug.description}
          <div className="delete-btn">
            <Button
              onClick={() => {
                onBugDelete(bug.id);
              }}
              title="Delete"
            />
          </div>
        </td>
      </tr>
    </>
  );
}

export default Bug;
