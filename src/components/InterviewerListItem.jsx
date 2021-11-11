import React from "react";
import classNames from 'classnames';
import './InterviewerListItem.scss'


export default function InterviewerListItem(props) {
  
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  const interviewerClassImg = classNames("interviewers__item-image", {
    "interviewers__item--selected-image": props.selected,
  });

  return (
<li className={interviewerClass}
  onClick={() => props.setInterviewer(props.id)}
>
{/* <button
        className={interviewerClass}
        onClick={props.onClick}
      >
        {props.children}
      </button> */}
  <img 
    className={interviewerClassImg}
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name}
</li>
  );
}