import { useState, useEffect } from "react";
import "./index.css";
import Button from "../Button";
import Dropdown from "../Dropdown";

export default function BugReportingForm(props) {
  const { onAddSuccess, bugToEdit, updateBug } = props;
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (bugToEdit) {
      // Set initial values when editing a bug
      setTitle(bugToEdit.title || "");
      setProject(bugToEdit.project || "");
      setDescription(bugToEdit.description || "");
      setStatus(bugToEdit.status || "");
      setPriority(bugToEdit.priority || "");
    }
  }, [bugToEdit]);

  const addOrUpdateBug = (event) => {
    event.preventDefault();

    if (title && project && description && status && priority) {
      const newBug = {
        id: bugToEdit ? bugToEdit.id : Date.now(),
        title: title,
        project: project,
        description: description,
        status: status,
        priority: priority,
      };

      if (bugToEdit) {
        updateBug(newBug);
      } else {
        onAddSuccess(newBug);
      }
    }
  };
  const handleFilterChange1 = (event) => {
    setPriority(event.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={title}
          className="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={project}
          className="project"
          placeholder="Project"
          onChange={(e) => setProject(e.target.value)}
        />
        <textarea
          name="Description"
          placeholder="Description"
          id="des"
          cols="90"
          rows="20"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="status-dropdown">
          <input
            type="text"
            value={status}
            className="status"
            placeholder="Status"
            onChange={(e) => setStatus(e.target.value)}
          />

          <Dropdown
            value={priority}
            dropdown_title="Priority"
            onChange={handleFilterChange1}
          />
        </div>
        <Button
          onClick={addOrUpdateBug}
          title={bugToEdit ? "Update" : "Save"}
        />
      </form>
    </>
  );
}
