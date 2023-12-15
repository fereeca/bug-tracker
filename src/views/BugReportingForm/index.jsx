import { useState, useEffect, useCallback } from "react";
import "./form.css";
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

  const addOrUpdateBug = useCallback(
    (event) => {
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
    },
    [
      title,
      project,
      description,
      status,
      priority,
      bugToEdit,
      updateBug,
      onAddSuccess,
    ]
  );

  const handleFilterChange1 = (event) => {
    setPriority(event.target.value);
  };

  return (
    <>
      <div className="form-name">
        <h2>Bug Reporting Form</h2>
      </div>
      <form>
        <label htmlFor="title">
          <div className="title-p">Bug Title: </div>
          <input
            type="text"
            value={title}
            className="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="project">
          <div className="title-p">Project Title: </div>
          <input
            type="text"
            value={project}
            className="project"
            placeholder="Project"
            onChange={(e) => setProject(e.target.value)}
          />
        </label>
        <label htmlFor="des">
          <div className="title-p">Project Description: </div>
          <textarea
            className="des"
            name="Description"
            placeholder="Description"
            id="des"
            cols="50"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="status-dropdown">
          <label htmlFor="status">
            <div className="title-p"> Status: </div>
            <input
              type="text"
              value={status}
              className="status"
              placeholder="Status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>

          <Dropdown
            value={priority}
            dropdown_title="Priority"
            onChange={handleFilterChange1}
          />
        </div>
        <div className="bw">
          <Button
            onClick={addOrUpdateBug}
            title={bugToEdit ? "Update" : "Save"}
            className="b"
          />
        </div>
      </form>
    </>
  );
}
