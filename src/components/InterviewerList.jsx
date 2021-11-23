import React from "react";
import classNames from 'classnames';
import './InterviewerList.scss';
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  console.log("Interviewers",props);

  const interviewers = props.interviewers.map(interviewer => {
    console.log("IntId", interviewer)
    return(<InterviewerListItem 
      key={interviewer.id} 
      name={interviewer.name} 
      avatar={interviewer.avatar} 
      selected={interviewer.id === props.value} 
      setInterviewer={() => props.onChange(interviewer.id)}
      />)
      
  });
  console.log("interviewerList", interviewers)
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}