import React from "react";
import classNames from 'classnames';
import './InterviewerList.scss';
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  console.log(props);

  // const interviewerData = props.interviewer;

  // const interviewerListItems = InterviewerListItem.map((interviewerData) =>
  //   <InterviewerListItem
  //     key={interviewerData.id}
  //     name={interviewerData.name}
  //   />
  // );

  const interviewers = (props.interviewers).map((interviewer) =>
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.interviewer}
      //selected={interviewer.id === props.value}
      //setInterviewer={() => onChange(interviewer.id)}    
      setInterviewer={() => props.setInterviewer(interviewer.id)}
    />
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}