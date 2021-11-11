import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props){

  const dayListItems = (props.days).map((dayData) =>
    <DayListItem
      key={dayData.id}
      name={dayData.name}
      spots={dayData.spots}
      selected={props.name === dayData.value}
      setDay={() => props.onChange(dayData.name)}
    />
  );

  return(
    <ul>
      {dayListItems}      
    </ul>
  )
}
  

