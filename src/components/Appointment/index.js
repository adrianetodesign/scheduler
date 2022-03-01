import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Status";
import useVisualMode from "hooks/useVisualMode";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const onAdd = () => {
    transition(CREATE);
  };

  const onCancel= () => {
    back();
  }

  function save(name, interviewer) {
    transition(SAVING);
    
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW));
  }

  function remove() {
    transition(DELETING);

    const interview = null;
    props.deleteInterview(props.id, interview)
    .then(() => transition(EMPTY));
  }

  const getInterviewer = (interview) => {
    for (const interviewerObj of props.interviewers) {
      if (interviewerObj.id === interview.interviewer) {
        return interviewerObj.name;
      }
    }
  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={onAdd} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={getInterviewer(props.interview)}
          onDelete={remove}
        />
      )}
      {mode === CREATE && (
        <Form
        interviewers={props.interviewers}
        onSave={save}
        onCancel={onCancel}
        />
      )}   
      {mode === SAVING && (
        <Status
        message="Saving" 
        />
      )}
      {mode === DELETING && (
        <Status
        message="Deleting"
        />
      )}
    </article>
    );
};