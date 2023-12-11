import { useState } from "react";
import "./index.css";
import Button from "../Button";

export default function BugReportingForm(props) {
  const { onAddSuccess } = props;
  const [title, settitle] = useState("");
  const [project, setproject] = useState("");
  const [description, setdescription] = useState("");
  const [severity, setseverity] = useState("");

  const add = (event) => {
    // var bugs = JSON.parse(localStorage.getItem("bugs") || "[]");
    // var bug = {
    //   title: title,
    //   project: project,
    //   description: description,
    //   severity: severity,
    // };
    // bugs.push(bug);
    // localStorage.setItem("bugs", JSON.stringify(bugs));

    event.preventDefault();

    if (title && project && description && severity) {
      const newBug = {
        id: Date.now(),
        title: title,
        project: project,
        description: description,
        severity: severity,
      };

      onAddSuccess(newBug);
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={title}
          className="title"
          placeholder="Title"
          onChange={(e) => settitle(e.target.value)}
        ></input>
        <input
          type="text"
          value={project}
          className="project"
          placeholder="Project"
          onChange={(e) => setproject(e.target.value)}
        ></input>
        <textarea
          name="Description"
          placeholder="Description"
          id="des"
          cols="90"
          rows="20"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>

        <input
          type="text"
          value={severity}
          className="severity"
          placeholder="Severity"
          onChange={(e) => setseverity(e.target.value)}
        ></input>
        <Button onClick={add} title="save" />
      </form>
    </>
  );
}
