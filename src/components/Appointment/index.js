import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const onAdd = () => {
    transition(CREATE);
  };

  const onEdit = () => {
    transition(EDIT);
  }

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
    if (mode === CONFIRM) {
      transition(DELETING);
      props.deleteInterview(props.id)
      .then(() => transition(EMPTY));
    } else {
      transition(CONFIRM);      
    }
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
          onEdit={onEdit}
        />
      )}
      {mode === CREATE && (
        <Form
        interviewers={props.interviewers}
        onSave={save}
        onCancel={onCancel}
        />
      )}  
      {mode === EDIT && (
        <Form
        student={props.interview && props.interview.student}
        interviewer={props.interview && props.interview.interviewer}
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
      {mode === CONFIRM && (
        <Confirm message="Are you sure you want to delete this appointment?" onConfirm={remove} onCancel={onCancel}/>
      )}
      {mode === DELETING && (
        <Status
        message="Deleting"
        />
      )}
    </article>
    );
};