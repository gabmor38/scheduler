import React from "react";
import classNames from 'classnames';
import './InterviewerList.scss';
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  console.log("Interviewers",props);

  const interviewers = props.interviewers.map(interviewer => {
    console.log("InterviewerID", interviewer)
    return(<InterviewerListItem 
      key={interviewer.id}
      name={interviewer.name} 
      avatar={interviewer.avatar} 
      selected={interviewer.id === props.value} 
      setInterviewer={() => props.onChange(interviewer.id)}
      />)
      
  });
  console.log("HELLO", interviewers)
  console.log("HELLO2", props.value)
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}