import React, { Fragment } from 'react'
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';


export default function Appointment(props) {
  
console.log(props)

  return (
    
    <Fragment>
      <Header {...props.time} />
      {props.interview ? 
      <>
      <Show>

      </Show>
      </>
      :
      <>
      <Empty>
        
      </Empty>
      </>
      }
      
      <article className="appointment at">{props.time}</article>
    </Fragment>
    
  )
}
