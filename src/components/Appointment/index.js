import React, { Fragment } from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Form from './Form';
import Empty from './Empty';
import Status from './Status';
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";

export default function Appointment(props) {

  console.log("Props::", props);
//this is the default value
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING); // transition to save before passing the props.
    props.bookInterview(props.id, interview)
    .then(res => { // make a promise once it is resolved then transition to SHOW
      transition(SHOW);
    })
  }
 
  return (
    <article className="appointment at">
    <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && 
      <Form
      interviewers={props.interviewers}
      onCancel={()=> back(EMPTY)}
      onSave={save}
      />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting"/>}
      
    </article>

  );
}
