import React, { useState, Fragment } from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Form from './Form';
import Empty from './Empty';
import Status from './Status';
import useVisualMode from 'hooks/useVisualMode';
import Confirm from './Confirm';
import Error from './Error';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE ="ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {

  console.log("Props::", props);
  //this is the default value
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const [message, setMessage] = useState("");

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING); // transition to save before passing the props.
    props.bookInterview(props.id, interview)
      .then((res) => { // make a promise once it is resolved then transition to SHOW
        if(res) {
          transition(ERROR_SAVE, true)
        }else {
          transition(SHOW)
        }
        //console.log("RES", res)
        // transition(SHOW);
      })
      // .catch(err => {
      //   console.log("ERROR", err)
      //   transition(ERROR_SAVE, true);
      // });
  }

  // function cancel() {
  //   transition(CONFIRM);
  //   props.cancelInterview(props.id)
  //     .then(res => {
  //       transition(DELETING);
  //     });
  //   transition(EMPTY);
  // }


  function cancel() {
    setMessage("Deleting")
    transition(DELETING)
    props.cancelInterview(props.id)
    .then((res) => {
      if(res) {
        transition(ERROR_DELETE, true)
      } else {
        transition(EMPTY)
      }
    })//.catch(error => transition(ERROR_DELETE));
  }

  return (
    <article className="appointment at">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE &&
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}

        />}
      {mode === EDIT && 
      <Form
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}

        />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm 
      onConfirm={cancel}
      onCancel={() => back()}
      message="Do you really want to delete?" />}
      {mode === ERROR_SAVE && <Error message={"Unable to save"}
      onClose={() => back()}/>}
      {mode === ERROR_DELETE && <Error message={"Unable to delete"}
      onClose={() => back()}/>}

    </article>

  );
}
