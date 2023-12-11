// import { useState } from "react";
// import "./index.css";
// import Button from "../Button";

// export default function BugReportingForm(props) {
//   const { onAddSuccess } = props;
//   const [title, settitle] = useState("");
//   const [project, setproject] = useState("");
//   const [description, setdescription] = useState("");
//   const [severity, setseverity] = useState("");

//   const add = (event) => {
//     // var bugs = JSON.parse(localStorage.getItem("bugs") || "[]");
//     // var bug = {
//     //   title: title,
//     //   project: project,
//     //   description: description,
//     //   severity: severity,
//     // };
//     // bugs.push(bug);
//     // localStorage.setItem("bugs", JSON.stringify(bugs));

//     event.preventDefault();

//     if (title && project && description && severity) {
//       const newBug = {
//         id: Date.now(),
//         title: title,
//         project: project,
//         description: description,
//         severity: severity,
//       };

//       onAddSuccess(newBug);
//     }
//   };

//   return (
//     <>
//       <form>
//         <input
//           type="text"
//           value={title}
//           className="title"
//           placeholder="Title"
//           onChange={(e) => settitle(e.target.value)}
//         ></input>
//         <input
//           type="text"
//           value={project}
//           className="project"
//           placeholder="Project"
//           onChange={(e) => setproject(e.target.value)}
//         ></input>
//         <textarea
//           name="Description"
//           placeholder="Description"
//           id="des"
//           cols="90"
//           rows="20"
//           value={description}
//           onChange={(e) => setdescription(e.target.value)}
//         ></textarea>

//         <input
//           type="text"
//           value={severity}
//           className="severity"
//           placeholder="Severity"
//           onChange={(e) => setseverity(e.target.value)}
//         ></input>
//         <Button onClick={add} title="save" />
//       </form>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import "./index.css";
import Button from "../Button";

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
        id: bugToEdit ? bugToEdit.id : Date.now(), // If editing, keep the same ID; otherwise, create a new one
        title: title,
        project: project,
        description: description,
        status: status,
        priority: priority,
      };

      if (bugToEdit) {
        // If editing, call updateBug function
        updateBug(newBug);
      } else {
        // If adding new bug, call onAddSuccess function
        onAddSuccess(newBug);
      }
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
        <input
          type="text"
          value={status}
          className="status"
          placeholder="Status"
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="text"
          value={priority}
          className="priority"
          placeholder="priority"
          onChange={(e) => setPriority(e.target.value)}
        />
        <Button
          onClick={addOrUpdateBug}
          title={bugToEdit ? "Update" : "Save"}
        />
      </form>
    </>
  );
}
