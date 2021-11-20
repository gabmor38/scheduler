import React from "react";
import Appointment from "components/Appointment/index";
import "components/Application.scss";
import DayList from "./DayList";
import { useState, useEffect } from "react";
import axios from 'axios';
import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";

const appointments = {
  "1": {
    id: 1,
    time: "12pm",
  },
  "2": {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  "3": {
    id: 3,
    time: "2pm",
  },
  "4": {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  "5": {
    id: 5,
    time: "4pm",
  }
};




export default function Application(props) {

  // const [day, setDay] = useState('Monday');
  // const [days, setDays] = useState([]);
  // const [appointments, setAppointments] = useState({})

  const[state, setState] = useState({
    day:"Monday",
    days: [],
    //appointments: {}
  });

  //function that updates the state with the new day
  const setDays = days => setState(prev => ({ ...prev, days }));
  const setDay = day => setState({...state, day});
 


  // const state = {day:'Monday', days:[]};
  // setState({...state, day:"Tuesday"});
 
  //iterate over the appointments
  const appointmentArr = Object.values(appointments).map((appointment) => (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={appointment.interview}
    />

  ));

  useEffect(()=> {
    const daysUrl= `/api/days`;
    axios.get(daysUrl)
      .then((response)=> {
        setDays([...response.data]);
        console.log("response", response)
      })
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {appointmentArr}
      </section>

    </main>
  );
}
