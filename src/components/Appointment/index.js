import React, { Fragment } from 'react'
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';


export default function Appointment(props) {
  
console.log(props)
  
  return (
    
      <article className="appointment at">
      <Header time={props.time}> </Header>
      {props.interview ? 
      <Show student={props.interview.student}
      interviewer={props.interview.interviewer.name}
      >
      </Show>
      :
      <Empty></Empty>

      }
      </article>
      
      
  
  )
}
