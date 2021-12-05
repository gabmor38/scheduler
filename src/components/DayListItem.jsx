import React from "react";
import classNames from 'classnames';
import './DayListItem.scss';


export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0

  });

  const formatSpots=(spots) => {
    return (
      !spots || spots === 0 ? `no spots remaining`: `${spots} spot${spots === 1 ? "": "s"} remaining`
    )
  }
 
  return (
    <li 
    className={dayClass} onClick={props.setDay} selected={props.selected} data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
