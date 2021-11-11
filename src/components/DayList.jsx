import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props){

  const dayListItems = (props.days).map((dayData) =>
    <DayListItem
      key={dayData.id}
      name={dayData.name}
      spots={dayData.spots}
      selected={props.selectedDay === dayData.id}
      setDay={(_event) => props.setDay(dayData.id)}
    />
  );

  return(
    <ul>
      {dayListItems}      
    </ul>
  )
}
  

