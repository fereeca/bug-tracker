import { useState, useEffect, useCallback } from "react";
import "./form.css";
import Button from "../Button";
import Dropdown from "../Dropdown";

const initalError = {
  title: "",
  project: "",
  description: "",
  status: "",
  priority: "",
};

export default function BugReportingForm(props) {
  const { onAddSuccess, bugToEdit, updateBug } = props;
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [errorMessage, setErrorMessage] = useState(initalError);

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

    if (!title) {
      setErrorMessage((prev) => {
        return { ...prev, title: "Please provide a title" };
      });
    }
    if (!project) {
      setErrorMessage((prev) => {
        return { ...prev, project: "Please provide a project" };
      });
    }
    if (!description) {
      setErrorMessage((prev) => {
        return { ...prev, description: "Please provide a description" };
      });
    }
    if (!status) {
      setErrorMessage((prev) => {
        return { ...prev, status: "Please provide a status" };
      });
    }
    if (!priority) {
      setErrorMessage((prev) => {
        return { ...prev, priority: "Please provide a priority" };
      });
    }

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
    setErrorMessage((prev) => {
      return { ...prev, priority: "" };
    });
  };

  const handleFilterChange2 = (event) => {
    setStatus(event.target.value);
    setErrorMessage((prev) => {
      return { ...prev, status: "" };
    });
  };

  return (
    <>
      <div className="form-name">
        <div className="logo">
          <i className="fas fa-bug"></i>
          <h2>Bug Reporting Form</h2>
        </div>
      </div>

      <form>
        <label htmlFor="title">
          <div className="title-p">Bug Title: </div>
          <input
            type="text"
            value={title}
            className="title"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
              setErrorMessage((prev) => {
                return { ...prev, title: "" };
              });
            }}
          />
          <p className="error">
            {errorMessage.title ? errorMessage.title : ""}
          </p>
        </label>

        <label htmlFor="project">
          <div className="title-p">Project Title: </div>
          <input
            type="text"
            value={project}
            className="project"
            placeholder="Project"
            onChange={(e) => {
              setProject(e.target.value);
              setErrorMessage((prev) => {
                return { ...prev, project: "" };
              });
            }}
          />
          <p className="error">
            {errorMessage.project ? errorMessage.project : ""}
          </p>
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
            onChange={(e) => {
              setDescription(e.target.value);
              setErrorMessage((prev) => {
                return { ...prev, description: "" };
              });
            }}
          />
          <p className="error">
            {errorMessage.description ? errorMessage.description : ""}
          </p>
        </label>
        <div className="status-dropdown">
          <div className="dropdown">
            <Dropdown
              value={status}
              title="Status"
              onChange={handleFilterChange2}
              option1="Open"
              option2="In Progress"
              option3="Failed"
              opt1="Open"
              opt2="In Progress"
              opt3="Failed"
            />

            <Dropdown
              value={priority}
              title="Priority"
              onChange={handleFilterChange1}
              option1="High"
              option2="Medium"
              option3="Low"
              opt1="High"
              opt2="Medium"
              opt3="Low"
            />
          </div>

          <div className="errormsg">
            <p className="error">
              {errorMessage.status ? errorMessage.status : ""}
            </p>
            <p className="error">
              {errorMessage.priority ? errorMessage.priority : ""}
            </p>
          </div>
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
