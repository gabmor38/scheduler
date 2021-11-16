import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props){

  const dayListItems = (props.days).map((day) => {
    return(
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={props.value === day.name}
      setDay={() => props.onChange(day.name)}
    />
    )
  });

  return(
    <ul>
      {dayListItems}      
    </ul>
  )
}
  

